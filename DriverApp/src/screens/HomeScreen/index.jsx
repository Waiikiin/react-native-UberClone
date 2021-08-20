import React, { useState } from 'react';
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

const origin = {latitude: 49.8004, longitude: -97.1676};
const destination = {latitude: 49.7999, longitude: -97.1676};

const HomeScreen = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [driverPosition, setDriverPosition] = useState(null);
    const [order, setOrder] = useState(null);
    const buttonBottomPos = 150;

    const [newOrder, setNewOrder] = useState({
        id: '1',

        type: 'UberX',
        originLatitude: origin.latitude,
        originLongitude: origin.longitude,

        destLatitude: destination.latitude,
        destLongitude: destination.longitude,

        user: {
            rating: 5.00,
            name: 'John',
        }
    });

    const onGoPress = () => {
        setIsOnline(!isOnline);
    }

    const onDecline = () => {
        setNewOrder(null);
    }

    const onAccept =() => {
        setOrder(newOrder);
        setNewOrder(null);
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
                            <Text style={[styles.bottomText, {fontWeight: 'bold'}]}>{order.user.name}</Text>
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
                        <Text style={styles.bottomText}> Dropping off {order.user.name}</Text>
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
                        <Text style={styles.bottomText}> Picking up {order.user.name}</Text>
                    </View>
                    <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
                </View>
            )
        }

        if (isOnline) {
            return ( <Text style={styles.bottomText} > You're Online</Text> )
        } else {
            return ( <Text style={styles.bottomText} > You're Offline</Text> )
        }
    }

    const renderGo = () => {
        if (isOnline) {
            return ( <Text style={styles.goText}>GO</Text> )
        } else {
            return (  <Text style={styles.goText}></Text> )
        }
    }

    const onUserLocationChange = (event) => {
        setDriverPosition(event.nativeEvent.coordinate);
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
            console.log(event);
            console.log(order);
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
                        origin={driverPosition}
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
                

            { newOrder && 
                <OrderPopup 
                    newOrder={newOrder}
                    onDecline={onDecline}
                    duration={6}
                    distance={0.5}
                    onAccept={() => onAccept(newOrder)}
                />
            }
        </View>

        
    )
}

export default HomeScreen
