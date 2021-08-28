import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

import Ionicon from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"

const AvailableUberRow = ( { selectedCar, car, onPress, isSelected }) => {
    // need to refine
    // use google direction API
    const calcaulateDropOff = () => {
        if (car.type === "UberX") {
            return '16:35'
        }
        if (car.type === "Comfort") {
            return '16:21'
        }

        if (car.type === "UberXL") {
            return '16:28'
        }
    }

    // need to refine
    const calculatePrice = () => {
        if (car.type === "UberX") {
            return '15'
        }
        if (car.type === "Comfort") {
            return '19'
        }

        if (car.type === "UberXL") {
            return '23'
        }
    }

    const getSeatNum = () => {
        if (car.type === "UberX") {
            return '4'
        }
        if (car.type === "Comfort") {
            return '4'
        }

        if (car.type === "UberXL") {
            return '6'
        }
    }


    const getImage = () => {
        if (car.type === "UberX") {
            return require('../../assets/images/UberX.png')
        }
        if (car.type === "Comfort") {
            return require('../../assets/images/Comfort.png')
        }

        if (car.type === "UberXL") {
            return require('../../assets/images/UberXL.png')
        }
    }
    return (
        <Pressable 
            onPress={onPress}
            style={[styles.container, {
                backgroundColor: isSelected ? '#efefef' : 'white',
            }
            ]}>
            <Image 
                style={styles.image} 
                source={getImage()}
            />

            <View style={styles.middleContainer}>
                <View style={styles.middleWrapper}>
                    <Text style={styles.type}>
                        {car.type} {' '} 
                        <Ionicon name={'person'} size={13} />
                    </Text>

                    <Text style={styles.seats}>
                        {' '}{getSeatNum()}
                    </Text>
                </View>

               <Text style={styles.time}>
                    {calcaulateDropOff()} dropoff
               </Text>
            </View>

            <View style={styles.rightContainer}>
                <Text style={styles.price}>
                    ${calculatePrice()}
                </Text>
            </View>
        </Pressable>
    )
}

export default AvailableUberRow