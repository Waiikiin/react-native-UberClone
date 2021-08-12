import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import Ionicon from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"

const AvailableUberRow = (props) => {
    const {type} = props;

    const getImage = () => {
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.png')
        }

        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.png')
        }

        if (type.type === 'UberXL') {
            return require('../../assets/images/UberXL.png')
        }
    }
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={getImage()}
            />

            <View style={styles.middleContainer}>
                <View style={styles.middleWrapper}>
                    <Text style={styles.type}>
                        {type.type} {' '} 
                        <Ionicon name={'person'} size={13} />
                    </Text>

                    <Text style={styles.seats}>
                        {' '}3
                    </Text>
                </View>

               <Text style={styles.time}>
                   14:13 dropoff
               </Text>
            </View>

            <View style={styles.rightContainer}>
                <Text style={styles.price}>
                    $27
                </Text>
            </View>
        </View>
    )
}

export default AvailableUberRow