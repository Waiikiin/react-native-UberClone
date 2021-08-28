import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Config from "react-native-config";

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import OrderPopup from '../../components/OrderPopup';
import styles from './styles';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import { getCar, listOrders } from '../../graphql/queries';
import { createCar, updateCar, updateOrder } from '../../graphql/mutations';
import { onOrderUpdated } from './subscriptions';

const origin = {latitude: 49.8004, longitude: -97.1676};
const destination = {latitude: 49.7999, longitude: -97.1676};

const origin2 = {latitude: 49.8001, longitude: -97.1671};
const destination2 = {latitude: 49.7989, longitude: -97.1676};


const HomeScreen = () => {
    const [car, setCar] = useState(null);
    const [order, setOrder] = useState(null);
    const [newOrders, setNewOrders] = useState([]);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);

    const buttonBottomPos = 150;

    const fetchCar = async () => {
        try {
            const authenticatedUser = await Auth.currentAuthenticatedUser();
            
            const getCarData = await API.graphql(
                graphqlOperation(getCar, {
                    id: authenticatedUser.attributes.sub,
                })
            )
            setCar(getCarData.data.getCar);
        } catch (e) {
            console.error(e);
        }
    }

    const fetchOrders = async () => {
        try {

            const listOrdersData = await API.graphql(
                graphqlOperation(listOrders,            
                    {filter: {
                            and: [
                                    {
                                        status: {eq: "New" }
                                    },
                                    {
                                        carId: {eq: car.id}
                                    }
                                ]
                        }
                    }  
                )
            )
            setNewOrders(listOrdersData.data.listOrders.items);
            console.log(newOrders)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchCar();
    }, [])

    // wait until my car is fetched then fetch my orders
    useEffect(() => {
        fetchOrders();
    }, [car])

    useEffect(() => {
        if (newOrders[0]){
            setDistanceAndDuration(
                {
                    latitude: newOrders[0].originLatitude,
                    longitude: newOrders[0].originLongitude,
                },
                {
                    latitude: newOrders[0].destLatitude,
                    longitude: newOrders[0].destLongitude,
                }
            )
        }
    }, [newOrders])

    // subscribe to order update
    useEffect(() => {
        console.log("enter")
        console.log(order);
        if (!order) {
            return;
        }

        const subscription = API.graphql(
        graphqlOperation(onOrderUpdated, {
            id: order.id,
        })).subscribe({
            next: ({ provider, value }) => { 
                setOrder(value.data.onOrderUpdated);
            },
            error: error => console.warn(error)
        })
        
        return () => {
            subscription.unsubscribe();
        }
    }, [order])

    const onGoPress = async () => {
        try {
            const authenticatedUser = await Auth.currentAuthenticatedUser();
            const input = {
                id: authenticatedUser.attributes.sub,
                isActive: !car.isActive,
            }
            const updatedCarData = await API.graphql(
                graphqlOperation(updateCar, {
                    input: input,
                })
            )
            setCar(updatedCarData.data.updateCar);
        } catch (e) {
            console.error(e);
        }
    }

    const onDecline = () => {
        // new order is at position 1
        setNewOrders(newOrders.shift());
    }

    const onAccept = async () => {
        try {
            const input = {
                id: newOrders[0].id,
                carId: car.id,
                status: "Picking up client",
            }
            const updateOrderData = await API.graphql(
                graphqlOperation(updateOrder, {
                    input
                })
            )
            setOrder(updateOrderData.data.updateOrder);

            // new order is at position 1
            setNewOrders(newOrders.shift());
        } catch (e) {
            console.error(e);
        }
    }


    const renderGo = () => {
        if (car?.isActive) {
            return ( <Text style={styles.goText}>GO</Text> )
        } else {
            return (  <Text style={styles.goText}>OFF</Text> )
        }
    }

    const onUserLocationChange = async (event) => {
        // update the driver's car location and set it to active
        try {
            event.persist();
            const authenticatedUser = await Auth.currentAuthenticatedUser();
            const { latitude, longitude, heading } = event.nativeEvent.coordinate;
            const input = {
                id: authenticatedUser.attributes.sub,
                latitude: latitude,
                longitude: longitude,
                heading: heading, 
            }
            
            const updatedCarData = await API.graphql(
                graphqlOperation(updateCar, {
                    input: input,
                })
            )
            setCar(updatedCarData.data.updateCar);
        } catch (e) {
            console.error(e);
        }
    }

    const onRoutingFinished = (event) => {
        if (order) {
            setOrder({
                ...order, 
                distance: event.distance,
                duration: event.duration,
                pickedUp: order.pickedUp || event.distance < 0.4,
                isFinished: order.pickedUp && event.distance < 0.4,
            })
        }
    }

    const getDestination = () => {
        if (order && order.pickedUp) {
            return {
                latitude: 49.8002,
                longitude: -97.1676,
            };
        } 

        return {
            latitude: destination.latitude, 
            longitude: destination.longitude,
        };
    }

    const setDistanceAndDuration = (origin, destination) => {
        const originLat = origin.latitude.toFixed(5);
        const originLong = origin.longitude.toFixed(5);
        const destLat = destination.latitude.toFixed(5);
        const destLong = destination.longitude.toFixed(5);
        const mode = 'driving';
        const lang = 'en';
        const alternatives = 'false';

        fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLong}&destination=${destLat},${destLong}&key=${Config.GOOGLE_MAPS_API_KEY}&mode=${mode}&alternatives=${alternatives}`)
        .then(response => {
            
            const responseJson = response.json()
            .then( result => {
                if (result?.status === 'OK'){
                    setDistance(result.routes[0].legs[0].distance.text);
                    setDuration(result.routes[0].legs[0].duration.text);
                    // return result.routes[0].legs[0].distance.text;               
                }
            });

        })
        .catch(e => console.error(e))
    }

    const renderBottom = () => {
        if (order && order.isFinished) {
            return(
                <View>
                    <View style={[styles.bottomContainer, {height: 50}]}>
                        <Ionicons name={"options-outline"} size={20} color="#4a4a4a"/>
                        <View style={styles.estimationInfoBarContainer}>
                            <View style={styles.estimationInfoBar}>
                                <Text style={styles.estimationText}>{ order.duration ? order.duration.toFixed(0) : 'calculating...'} min</Text>
                                <View style={[styles.userBackground, {backgroundColor:'#FF3232', height: 20, width: 20}]}>
                                    <FontAwesome name={"user"} size={14} color="white"/>
                                </View>
                                <Text style={styles.estimationText}>{order.distance ? order.distance.toFixed(1) : 'calculating...'} km </Text>
                            </View>
                        </View>
                        <MaterialIcons name={"format-list-bulleted"} size={20} color="#4a4a4a"/>
                    </View>

                    <View style={styles.customerInfoContainer}>
                            <MaterialCommunityIcons name={"phone-message"} size={28} color="black"/>
                            <Text style={[styles.bottomText, {fontWeight: 'bold'}]}>{order.user.username}</Text>
                            <FontAwesome name={"user"} size={28} color="black"/>
                    </View>
                    <Pressable style={styles.completeButton}>
                        <View style={styles.completeArrow}>
                            <MaterialIcons name={"double-arrow"} size={20} color="white"/>
                        </View>
                
                        <Text style={styles.completeText}>
                            COMPLETE {order.type.toUpperCase()}
                        </Text>
                    </Pressable>
                </View>
            )
        }

        if (order && order.pickedUp) {
            return( 
                <View style={styles.bottomContainer}>
                    <Ionicons name={"options-outline"} size={24} color="#4a4a4a"/>
                    <View style={styles.estimationInfoBarContainer}>
                        <View style={styles.estimationInfoBar}>
                            <Text style={styles.estimationText}>{ order.duration ? order.duration.toFixed(0) : 'calculating...'} min</Text>
                            <View style={styles.userBackground}>
                                <FontAwesome name={"user"} size={20} color="white"/>
                            </View>
                            <Text style={styles.estimationText}>{order.distance ? order.distance.toFixed(1) : 'calculating...'} km </Text>
                        </View>
                        <Text style={styles.bottomText}> Dropping off {order.user.username}</Text>
                    </View>
                    <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
                </View>
            )
        } 
        
        if (order) {
            return( 
                <View style={styles.bottomContainer}>
                    <Ionicons name={"options-outline"} size={24} color="#4a4a4a"/>
                    <View style={styles.estimationInfoBarContainer}>
                        <View style={styles.estimationInfoBar}>
                            <Text style={styles.estimationText}>{ order.duration ? order.duration.toFixed(0) : 'calculating...'} min</Text>
                            <View style={[styles.userBackground, {backgroundColor:'#FF3232'}]}>
                                <FontAwesome name={"user"} size={20} color="white"/>
                            </View>
                            <Text style={styles.estimationText}>{order.distance ? order.distance.toFixed(1) : 'calculating...'} km </Text>
                        </View>
                        <Text style={styles.bottomText}> Picking up {order.user.username}</Text>
                    </View>
                    <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
                </View>
            )
        }

        if (car?.isActive) {
            return ( 
                <View style={styles.bottomContainer}>
                    <Ionicons name={"options-outline"} size={24} color="#4a4a4a"/>
                    <Text style={styles.bottomText} > You're Online</Text> 
                    <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
                </View>
            )
        } else {
            return ( 
                <View style={styles.bottomContainer}>
                    <Ionicons name={"options-outline"} size={24} color="#4a4a4a"/>
                    <Text style={styles.bottomText} > You're Offline</Text> 
                    <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
                </View>
            )
        }
    }

    return (
        <View style={styles.root}> 
             <MapView
                style={order && order.isFinished ? 
                    [styles.map, {height: Dimensions.get('window').height - 180}] : 
                    styles.map}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                showsUserLocation={true}
                onUserLocationChange={onUserLocationChange}
                region={{
                    latitude: 49.8004,
                    longitude: -97.1676,
                    latitudeDelta: 0.011,
                    longitudeDelta: 0.0071,
                }}
                userLocationFastestInterval={15000}
                userLocationUpdateInterval={15000}
            >
                {order && <MapViewDirections
                        origin={{
                            latitude: car?.latitude,
                            longitude: car?.longitude,
                        }}
                        onReady={onRoutingFinished}
                        destination={getDestination()}
                        strokeWidth={3}
                        apikey={Config.GOOGLE_MAPS_API_KEY}
                    />
                }
            </MapView>
            
            <Pressable style={[styles.balanceButton]}
                onPress={() => console.warn("abc")}>
                <Text style={styles.balanceText}>
                    <Text style={styles.dollarSign}>$</Text>
                        {' '}
                        0.00
                </Text>
            </Pressable>

            <Pressable style={[styles.mapButton, {top: 13, left: 15}]}
                onPress={() => console.warn("search pressed")}>
                <Ionicons name={"search"} size={24} color="#4a4a4a"/>
            </Pressable>
            
            <Pressable style={[styles.mapButton, {top: 5, right: 5}]}
                onPress={() => console.warn("profile pressed")}>
                <MaterialCommunityIcons name={"face-profile"} size={34} color="#4a4a4a"/>
            </Pressable>

            <Pressable 
                style={order && order.isFinished ? 
                    [styles.mapButton, {left: 15, bottom: buttonBottomPos + 60}]:
                    [styles.mapButton, {left: 15, bottom: buttonBottomPos}]}
                onPress={() => console.warn("shield pressed")}>
                <FontAwesome5 name={"shield-alt"} size={24} color="#4a4a4a"/>
            </Pressable>

            <Pressable 
                style={ order && order.isFinished ?
                    [styles.goButton, {bottom: buttonBottomPos + 60}] :
                    styles.goButton}
                onPress={onGoPress}>
                {renderGo()}
            </Pressable>

            {renderBottom()}
                

            { newOrders && newOrders.length > 0 && !order &&
                <OrderPopup 
                    newOrder={newOrders[0]}
                    onDecline={onDecline}
                    duration={duration}
                    distance={distance}
                    onAccept={() => onAccept(newOrders[0])}
                />
            }
        </View>   
    )
}

export default HomeScreen