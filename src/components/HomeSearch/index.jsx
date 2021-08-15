import React from 'react'
import { View, Text, Pressable } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import styles from './styles'

import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input Box */}
            <Pressable 
                onPress={() => {
                    navigation.navigate('DestinationSearch');
                }}
                style={styles.inputBox}
            >
                <Text style={styles.inputText}> Where To?</Text>

                <View style={styles.timeWrapper}>
                    <View style={styles.timeContainer} >
                        <AntDesign name={'clockcircle'} size={15}/>
                        <Text>Now</Text>
                        <MaterialIcons name={'keyboard-arrow-down'} size={15}/>
                    </View>
                </View>
            </Pressable>

            {/* Previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'#333333'} />
                </View>
                <View style={styles.destinationContainer}>
                    <Text style={styles.destinationTextBig}>2080 Pembina Hwy</Text>
                    <Text style={styles.destinationTextSmall}>Winnipeg, Manitoba R3T 2G9</Text>
                </View>       
            </View>

            
        </View>
    )
}

export default HomeSearch
