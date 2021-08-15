import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import cars from '../../assets/data/cars';
import Config from "react-native-config";

import Geolocation from '@react-native-community/geolocation';

const UberMap = ({ origin, destination }) => {
    const _latitudeDelta = 0.4322;
    const _longitudeDelta =  0.4121;
    const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;

    const dummyLocation = {
        latitude:  28.450627,
        longitude: -16.263045,
    };

    const [location, setLocation] = useState(null);

    useEffect(() => {
    //   Geolocation.getCurrentPosition(
    //     position => {
    //         console.log("position:" + position)
    //         const {latitude, longitude} = position.coords;
    //         setLocation({
    //             latitude,
    //             longitude,
    //         });
    //     },
    //     error => {
    //       console.log(error.code, error.message);
    //     },
    //     {},
    //   );
    }, []);

    const getImage = (type) => {
        if (type === 'UberX') {
            return require('../../assets/images/UberX.png')
        }

        if (type === 'Comfort') {
            return require('../../assets/images/Comfort.png')
        }

        if (type === 'UberXL') {
            return require('../../assets/images/UberXL.png')
        }
    };

    return (
        <MapView
            style={{
                height: "100%",
                width: "100%",
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: dummyLocation.latitude,
                longitude: dummyLocation.longitude,
                latitudeDelta: _latitudeDelta,
                longitudeDelta: _longitudeDelta,
            }}
        >
        </MapView>
    )
}

export default UberMap
