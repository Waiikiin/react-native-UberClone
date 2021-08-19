import React, { useState } from 'react'
import { View, Text, Dimensions, Pressable } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Config from "react-native-config";

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const HomeScreen = () => {
    const [isOnline, setIsOnline] = useState(false);

    const onGoPress = () => {
        setIsOnline(!isOnline);
    }

    return (
        <View>
             <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                showsUserLocation={true}
                region={{
                    latitude: 49.8004,
                    longitude: -97.1676,
                    latitudeDelta: 0.011,
                    longitudeDelta: 0.0071,
                }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={Config.GOOGLE_MAPS_API_KEY}
                />
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
                {isOnline 
                    ? <Text style={styles.goText}>GO</Text>
                    : <Text style={styles.goText}></Text>
                }
            
            </Pressable>

            <View style={styles.bottomContainer}>
                <Ionicons name={"options-outline"} size={24} color="#4a4a4a"/>
                { isOnline 
                    ? <Text style={styles.bottomText} > You're online</Text> 
                    : <Text style={styles.bottomText} > You're offline</Text>
                }
                
                <MaterialIcons name={"format-list-bulleted"} size={24} color="#4a4a4a"/>
            </View>
        </View>

        
    )
}

export default HomeScreen
