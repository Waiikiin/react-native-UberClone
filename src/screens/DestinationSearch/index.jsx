import React, { useState, useEffect } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from "react-native-config";
import styles from './styles';
import PlaceRow from './PlaceRow';
import Ionicons from "react-native-vector-icons/Ionicons";

const DestinationSearch = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
    };

    const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
    };
    
    useEffect(() => {
        console.warn('useEffect is deprecated');
        if (origin && destination) {
            console.warn('redirect to results');
        }
        
    }, [origin, destination])

    return (
        <SafeAreaView>
            <View >
                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.square} />
            </View>

            <View >
                <GooglePlacesAutocomplete
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autoCompleteContainer,
                        separator: styles.separator,
                        listView: styles.listView,
                    }}
                    placeholder='Current Location'
                    onPress={(data, details = null) => {
                        setDestination({data, details});
                    }}
                    query={{
                        key: Config.GOOGLE_MAPS_API_KEY,
                        language: 'en',
                        components: 'country:ca',
                    }}

                    currentLocation={true}
                    currentLocationLabel='Current location'

                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                    enablePoweredByContainer={false}
                />

                <GooglePlacesAutocomplete
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            ...styles.autoCompleteContainer,
                            top: 55,
                        },
                        separator: styles.separator,
                        listView: {
                            ...styles.listView,
                            marginVertical: 5,
                        }
                    }} 
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestination({data, details});
                    }}
                    query={{
                        key: Config.GOOGLE_MAPS_API_KEY,
                        language: 'en',
                        components: 'country:ca',
                    }}             

                    renderRow={(data) => <PlaceRow data={data} />}
                    enablePoweredByContainer={false}
                />
            </View>
         
            <View style={styles.addIconContainer}>
                <Ionicons name={'add-circle'} size={35} color={"black"}/>
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch