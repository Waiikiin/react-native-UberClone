import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import AvailableUbers from '../../components/AvailableUbers';
import UberMap from '../../components/UberMap';
import styles from './styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createOrder } from  '../../graphql/mutations';

const SearchResults = (props) => {
    const route = useRoute();
    const navigation = useNavigation();

    const { origin, destination } = route.params;
    const typeState = useState(null);

    const onSubmit = async () => {
        // take element at position 0
        const [type] = typeState;
        if (!type) {
            return;
        }   
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const date = new Date();
            const input = {
                createdAt: date.toISOString(),
                type,
                originLatitude: origin.details.geometry.location.lat,
                originLongitude: origin.details.geometry.location.lng,
                destLatitude: destination.details.geometry.location.lat,
                destLongitude: destination.details.geometry.location.lng,

                userId: userInfo.attributes.sub,
                carId: "1",
            }

            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                        input: input
                    }
                )
            )

            console.log(response);
            Alert.alert(
                "On the Way!",
                "Your order has been submitted",
                [{
                    text: "Go home",
                    onPress: () => {navigation.navigate('Home')}
                }]
            )
        } catch (e) {
            console.log("Error", e);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <UberMap origin={origin.details.geometry.location} destination={destination.details.geometry.location}/>
            </View>

            <View style={styles.ubersContainer}>
                <AvailableUbers onSubmit={onSubmit} typeState={typeState}/>
            </View>

            <View style={styles.creditCardContainer}>
                <Text>Visa 4242 **** **** ****</Text>
            </View>

            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.confirm}>
                    Confirm Uber
                </Text>
            </Pressable>

        </View>
    )
}

export default SearchResults
