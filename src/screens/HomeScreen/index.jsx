import React from 'react';
import { View, Text } from 'react-native';

import HomeMap from '../../components/HomeMap';
import Promo from '../../components/Promo';
import HomeSearch from '../../components/HomeSearch/';
import styles from './styles';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.promoContainer}>
                <Promo />
            </View>

            <View style={styles.searchContainer}>
                <HomeSearch onPress={() => navigation.navigate('DestinationSearch')}/>
            </View>
            
            <View style={styles.mapContainer}>
                <Text style={styles.text}> Around you </Text>
                <View style={styles.mapWrapper}>
                    <HomeMap />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;
