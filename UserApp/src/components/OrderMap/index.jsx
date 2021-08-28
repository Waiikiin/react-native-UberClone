import React from 'react';
import { Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Config from "react-native-config";

import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from '../../graphql/queries';

const OrderMap = ({ car }) => {
    const _latitudeDelta = 0.0022;
    const _longitudeDelta =  0.0221;
    const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;

    const dummyLocation = {
        latitude:  28.450627,
        longitude: -16.263045,
    };

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
        <View>
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
                { car && (
                    <Marker
                        key={car.id}
                        coordinate={{ latitude : car.latitude , longitude : car.longitude }}
                    >
                        <Image 
                            style={{
                                width: 60, 
                                height: 60, 
                                resizeMode: 'contain',
                                transform: [{
                                    rotate: `${car.heading}deg`
                                },]
                            }}
                            source={getImage(car.type)} 
                        />
                    </Marker> 
                )}
            </MapView>
        </View>
    )
}

export default OrderMap
