import React from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const UberEats = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore local cuisines</Text>
            <Text style={styles.text}>
                Help your neighbors by helping yourself to something tasty
            </Text>
             <View> 
                <TouchableWithoutFeedback style={styles.learnMore}>          
                    <Text > Eat local</Text>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );
};

export default UberEats
