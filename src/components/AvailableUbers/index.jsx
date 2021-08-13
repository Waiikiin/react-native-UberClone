import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import AvailableUberRow from '../AvailableUberRow';

import typesData from '../../assets/data/types';

const AvailableUbers = () => {
    const confirm = () => {

    }

    return (
        <View>
            {typesData.map(type => (      
                <AvailableUberRow 
                    key={type.id} 
                    type={type}
                />
            ))}

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

export default AvailableUbers