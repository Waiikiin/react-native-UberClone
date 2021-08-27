import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import AvailableUbers from '../../components/AvailableUbers';
import UberMap from '../../components/UberMap';
import styles from './styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createOrder } from  '../../graphql/mutations';
import { listCars, listUsers } from '../../graphql/queries';

const SearchResults = (props) => {
    const route = useRoute();
    const navigation = useNavigation();

    const { origin, destination } = route.params;
    const [ cars, setCars ] = useState([]);
    const selectedCarState = useState(null);

    const [s] = selectedCarState;
    if (s) {
        console.log(s);
    }
    const onSubmit = async () => {
        // take element at position 0
        const [selectedCar] = selectedCarState;
        if (!selectedCar) {
            return;
        }

        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const date = new Date();
            const input = {
                createdAt: date.toISOString(),
                type: selectedCar.type,
                originLatitude: origin.details.geometry.location.lat,
                originLongitude: origin.details.geometry.location.lng,
                destLatitude: destination.details.geometry.location.lat,
                destLongitude: destination.details.geometry.location.lng,
                status: "New",
                userId: userInfo.attributes.sub,
                carId: selectedCar.id,
            }

            const createOrderData = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input: input
                    }
                )
            )
            navigation.navigate('OrderScreen', {
                id: createOrderData.data.createOrder.id
            })
        } catch (e) {
            console.error(e);
        }
    }
    
    // fetch cars and limit result to 3
    useEffect(() => {
        const fetchCars = async() => {
            const limit = 3;

            try {
                const listCarsData = await API.graphql(
                    // add filter cars in the same region
                    graphqlOperation(listCars, {limit})
                )
                setCars(listCarsData.data.listCars.items);
            } catch (e) {
                console.error(e);
            }
        }
        fetchCars();
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <UberMap origin={origin.details.geometry.location} destination={destination.details.geometry.location}/>
            </View>

            <View style={styles.ubersContainer}>
                {cars && cars.length > 0 &&
                    <AvailableUbers cars={cars} onSubmit={onSubmit} selectedCarState={selectedCarState}/>
                }
            </View>

            <View style={styles.creditCardContainer}>
                <Text>Visa 4242 **** **** ****</Text>
            </View>

            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.confirm}>
                    Confirm Uber
                </Text>
            </Pressable>

        </View>
    )
}

export default SearchResults
