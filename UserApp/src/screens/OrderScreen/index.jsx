import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import OrderMap from '../../components/OrderMap';
import styles from './styles';

import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation } from 'aws-amplify';
import { getOrder, getCar } from '../../graphql/queries';
import { onOrderUpdated, onCarUpdated } from './subscriptions';

const OrderScreen = (props) => {

    const [car, setCar] = useState(null);
    const [order, setOrder] = useState(null);

    const route = useRoute();
    
    
    // fetch initial order  
    useEffect(() => {
        const fetchOrder = async() => {
            try {
                const getOrderData = await API.graphql(
                    graphqlOperation(getOrder, {
                        id: route.params.id,
                    })
                )
                setOrder(getOrderData.data.getOrder);
                console.log(getOrderData);
            } catch (e) {
                console.error(e);
            }
        }
        fetchOrder();
    }, [])

    // subscribe to order update
    useEffect(() => {
        console.log(order);
        const subscription = API.graphql(
            graphqlOperation(onOrderUpdated, {
                id: route.params.id,
            })).subscribe({
                next: ({ provider, value }) => setOrder(value.data.onOrderUpdated),
                error: error => console.warn(error)
            })
        return () => {
            subscription.unsubscribe();
        }
        
    }, [])

    // subscribe to car update
    // need to depend on order to get the carId
    useEffect(() => {
        console.log(car);

        if (!order?.carId || order?.carId === '1') {
            return;
        }

        const subscription = API.graphql(
            graphqlOperation(onCarUpdated, {
                id: order.carId,
            })).subscribe({
                next: ({ provider, value }) => setCar(value.data.onCarUpdated),
                error: error => console.warn(error)
            })
        return () => {
            subscription.unsubscribe();
        }
        
    }, [order])

    // fetch car for order
    useEffect(() => {
        if (!order?.carId || order?.carId === '1') {
            return;
        }

        const fetchCar = async() => {
            try {
                const getCarData = await API.graphql(
                    graphqlOperation(getCar, {
                        id: order.carId,
                    })
                )
                setCar(getCarData.data.getCar);
                console.log(getCarData);
            } catch (e) {
                console.error(e);
            }
        }
        fetchCar();
    }, [order])

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <OrderMap car={car}/>
            </View>

            <View style={styles.orderInfoContainer}>
                <Text>
                    Order Status: {order?.status}
                    Car heading: {car?.heading}
                </Text>
            </View>
        </View>
    )
}

export default OrderScreen
