import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Config from "react-native-config";

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const HomeScreen = () => {
    return (
        <View>
             <MapView
                style={{width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={Config.GOOGLE_MAPS_API_KEY}
                />
            </MapView>
        </View>
    )
}

export default HomeScreen
