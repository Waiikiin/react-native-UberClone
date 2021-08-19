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
const destination = {latitude: 49.8014, longitude: -97.1686};

const HomeScreen = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [driverPosition, setDriverPosition] = useState(null);
    const [order, setOrder] = useState(null);

    const [newOrder, setNewOrder] = useState({
        id: '1',

        type: 'UberX',
        originLatitude: origin.latitude,
        originLongitude: origin.longitude,

        destLatitude: destination.latitude,
        destLongitude: destination.longitude,

        user: {
            rating: 5.00,
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
        if (order) {
            return( 
                <View style={styles.bottomTextWithOrderContainer}>
                    <View style={styles.bottomTextWithOrderWrapper}>
                        <Text>{order.duration.toFixed(0) || '?'} min</Text>
                        <View style={styles.userBackground}>
                            <FontAwesome name={"user"} size={20} color="white"/>
                        </View>
                        <Text>{order.distance.toFixed(1) || '?'} km</Text>
                    </View>
                    <Text style={styles.bottomText}> Picking up {order.user.name}</Text>
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
        console.log(event.nativeEvent);
        setDriverPosition(event.nativeEvent.coordinate);
    }

    const onRoutingFinished = (event) => {
        console.log(event);
        if (order) {
            setOrder({
                ...order, 
                distance: event.distance,
                duration: event.duration,
            })
        }
    }

    return (
        <View>
             <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                showsUserLocation={true}
                onUserLocationChange={onUserLocationChange}
                region={{
                    latitude: 49.8004,
                    longitude: -97.1676,
                    latitudeDelta: 0.011,
                    longitudeDelta: 0.0071,
                }}
            >
                {order && <MapViewDirections
                        origin={driverPosition}
                        onReady={onRoutingFinished}
                        destination={{
                            latitude: order.destLatitude,
                            longitude: order.destLongitude,
                        }}
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
                onPress={() => console.warn("abc")}>
                <Ionicons name={"search"} size={24} color="#4a4a4a"/>
            </Pressable>
            
            <Pressable style={[styles.mapButton, {top: 13, right: 15}]}
                onPress={() => console.warn("abc")}>
                <MaterialCommunityIcons name={"face-profile"} size={24} color="#4a4a4a"/>
            </Pressable>

            <Pressable style={[styles.mapButton, {left: 15, bottom: 130}]}
                onPress={() => console.warn("abc")}>
                <FontAwesome5 name={"shield-alt"} size={24} color="#4a4a4a"/>
            </Pressable>

            <Pressable style={[styles.goButton]}
                onPress={onGoPress}>
                {renderGo()}
            </Pressable>

            <View style={styles.bottomContainer}>
                <Ionicons name={"options-outline"} size={24} color="#4a4a4a"/>
                {renderBottom()}
                <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
            </View>

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
