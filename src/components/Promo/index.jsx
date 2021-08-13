import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';

import styles from './styles';

const Promo = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Get out and about</Text>
            <Text style={styles.text}>
                Stepping out? We'll help get you there and back again.
            </Text>

            <Pressable style={styles.button}>          
                <Text style={styles.buttonText}>{' '} Ride with Uber {' '}</Text>
            </Pressable>
        </View>
    );
};

export default Promo