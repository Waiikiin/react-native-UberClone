import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AvailableUberRow from '../AvailableUberRow';

import typesData from '../../assets/data/types';

const AvailableUbers = () => {
    return (
        <View style={styles.ubersContainer}>
            {typesData.map(type => (      
                <AvailableUberRow 
                    key={type.id} 
                    type={type}
                />
            ))}
        </View>
    )
}

export default AvailableUbers