import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import AvailableUberRow from '../AvailableUberRow';

// import typesData from '../../assets/data/types';

const AvailableUbers = ({ cars, selectedCarState }) => {
    const [ selectedCar, setSelectedCar ] = selectedCarState;

    return (
        <View style={styles.ubersContainer}>
            {cars.map(car => (      
                <AvailableUberRow 
                    key={car.id} 
                    car={car}
                    isSelected={car.id === selectedCar?.id}
                    selectedCar={selectedCar}
                    onPress={() => setSelectedCar(car)}
                /> 
            ))}
        </View>
    )
    
}

export default AvailableUbers