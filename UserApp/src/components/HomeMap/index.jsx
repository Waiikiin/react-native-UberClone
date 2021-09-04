import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Config from "react-native-config";

import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from '../../graphql/queries';

const HomeMap = ({ origin, destination }) => {
    const _latitudeDelta = 0.0022;
    const _longitudeDelta =  0.0221;
    const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;

    const dummyLocation = {
        latitude:  28.450627,
        longitude: -16.263045,
    };

    const [cars, setCars] = useState([]);
    const [location, setLocation] = useState(null);


    useEffect(() => {
        const fetchCars = async () => {
            try{
                const listCarsData = await API.graphql(
                    graphqlOperation(
                        listCars, {
                        }
                    )
                )
                setCars(listCarsData.data.listCars.items);
            } catch(e) {
                console.error(e);
            }
        }
        
        fetchCars();
    }, [])

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
                {cars && cars.map((car) => (
                    <Marker
                        key={car.id}
                        coordinate={{ latitude : car.latitude ? car.latitude : 28.450638,
                                        longitude : car.longitude ? car.longitude : -16.263056}}
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
                ))}
            </MapView>
        </View>
    )
}

export default HomeMap
