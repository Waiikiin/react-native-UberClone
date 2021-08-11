import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';

import styles from './styles';

const UberEats = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore local cuisines</Text>
            <Text style={styles.text}>
                Help your neighbors by helping yourself to something tasty
            </Text>

            <Pressable style={styles.button}>          
                <Text style={styles.buttonText}> Eat local</Text>
            </Pressable>
        </View>
    );
};

export default UberEats
