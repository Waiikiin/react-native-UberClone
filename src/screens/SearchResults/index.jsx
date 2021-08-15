import React from 'react';
import { View, Text, Pressable } from 'react-native';
import AvailableUbers from '../../components/AvailableUbers';
import UberMap from '../../components/UberMap';
import styles from './styles';

import { useRoute } from '@react-navigation/native';
const SearchResults = (props) => {
    const route = useRoute();
    const { origin, destination } = route.params;



    const confirm = () => {

    }
    
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <UberMap origin={origin.details.geometry.location} destination={destination.details.geometry.location}/>
            </View>

            <View style={styles.ubersContainer}>
                <AvailableUbers />
            </View>

            <View style={styles.creditCardContainer}>
                <Text>Visa 4242 **** **** ****</Text>
            </View>

            <Pressable onPress={confirm()} style={styles.button}>
                <Text style={styles.confirm}>
                    Confirm Uber
                </Text>
            </Pressable>

        </View>
    )
}

export default SearchResults
