import React from 'react';
import { View, Text } from 'react-native';
import AvailableUbers from '../../components/AvailableUbers';
import HomeMap from '../../components/HomeMap';
import styles from './styles';

const ResultLocation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <HomeMap />
            </View>

            <View style={styles.ubersContainer}>
                <AvailableUbers />
            </View>

        </View>
    )
}

export default ResultLocation
