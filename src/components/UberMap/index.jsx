import React from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import cars from '../../assets/data/cars';
import Config from "react-native-config";

const UberMap = ({ origin, destination }) => {
    const _latitudeDelta = 0.0052;
    const _longitudeDelta =  0.0051;
    const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;

    const originLocation = {
        latitude:  origin.lat,
        longitude: origin.lng,
    };

    const destinationLocation = {
        latitude: destination.lat,
        longitude: destination.lng,
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
        <MapView
            style={{
                height: "100%",
                width: "100%",
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: originLocation.latitude,
                longitude: originLocation.longitude,
                latitudeDelta: _latitudeDelta,
                longitudeDelta: _longitudeDelta,
            }}
        >
            <MapViewDirections
                origin={originLocation}
                destination={destinationLocation}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />

            {/* <Marker
                coordinate={origin}
                title={"Origin"}
            />

            <Marker
                coordinate={destination}
                title={"Destination"}
            />
             */}

            {/* test marker on images } */}

            {cars.map((car) => (
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
            ))}
        </MapView>
    )
}

export default UberMap
