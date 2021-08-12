import React from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import cars from '../../assets/data/cars';

const HomeMap = (props) => {

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
    }

    const origin = {latitude: 28.450627, longitude: -16.263045};
    const destination = {latitude: 28.450127, longitude: -16.269045};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCw2-c4IfIm0iVC2Ac7xclNtYbCUsKKpN4';

    return (
        <MapView
            style={{
                height: "100%",
                width: "100%",
            }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />

            <Marker
                coordinate={origin}
                title={"Origin"}
            />

            <Marker
                coordinate={destination}
                title={"Destination"}
            />
            
            {/* test marker on images } */}

            {/* {cars.map((car) => (
                <Marker
                    key={car.id}
                    coordinate={{ latitude : car.latitude , longitude : car.longitude }}
                >
                    <Image 
                        style={{width: 60, height: 60, resizeMode: 'contain'}}
                        source={getImage(car.type)} 
                    />
                </Marker>
            ))} */}
        </MapView>
    )
}

export default HomeMap
