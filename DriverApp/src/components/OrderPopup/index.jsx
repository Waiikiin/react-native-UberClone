import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const OrderPopup = ({newOrder, duration, distance, onDecline, onAccept}) => {
    return (
        <View style={styles.root}>
            <View style={styles.buttonsContainer}>
                <Pressable style={[styles.button, { backgroundColor: 'red'}]} onPress={onDecline}>
                    <Text style={styles.declineText}>Decline</Text>
                </Pressable>

                <Pressable style={[styles.button, { backgroundColor: 'green'}]} onPress={onAccept}>
                    <Text style={styles.declineText}>Accept</Text>
                </Pressable>
            </View>
            
            <View style={styles.popupContainer}>
                <View style={styles.userInfoRow}>
                    <Text style={styles.uberType}>{newOrder.type}</Text>
                    <View style={styles.userBackground}>
                        <FontAwesome name={"user"} size={30} color="white"/>
                    </View>
                    <Text style={styles.uberType}> 
                        <AntDesign name={"star"} size={15}/>  
                        {' '}
                        {parseFloat(newOrder.user.rating).toFixed(2)} 
                    </Text>

                </View>
                
                <View style={styles.estimationWrapper}>
                    <Text style={styles.estMin}>{duration} min</Text>
                    <Text style={styles.estDist}>{distance} mi</Text>
                </View>
                
                <View style={styles.lastContainer}> 
                    <Text style={styles.uberType}>
                        <AntDesign name={"star"} size={15}/>  
                        {' '}
                        Toward your destination
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default OrderPopup
