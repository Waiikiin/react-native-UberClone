import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView 
            contentContainerStyle={{
                paddingTop: 0,
            }}
            {...props}
        >
            <View style={{backgroundColor: 'black'}}>
                {/* User icon */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    paddingBottom: 20,
                    flexDirection: 'row',
                }}
                >
                    <View style={{
                        backgroundColor: '#cacaca',
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                    }} />

                    <View style={{
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                        paddingHorizontal: 15,
                    }}>
                        <Text style={{color: 'white', fontSize: 20}}>Kin Leong</Text>
                        <Text style={{color: 'lightgrey', fontSize: 12}}>5.00 *</Text>
                    </View>
                </View>
                {/* Messages */}
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#a2a2a2',
                    borderTopWidth: 1,
                    borderTopColor: '#a2a2a2',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                }}>
                    <Pressable onPress={() => {console.warn('Messages')}}>
                        <Text style={{color: 'white'}}>Messages</Text>
                    </Pressable>
                </View>

                {/* Do more */}
                <View style={{ paddingHorizontal: 20}}>
                    <Pressable onPress={() => {console.warn('Do more with your account')}}>
                        <Text style={{color: '#a2a2a2', paddingVertical:5, fontSize: 12}}>Do more with your account</Text>
                    </Pressable>       
                </View>
                         
                {/* Get food */}
                <View style={{  padding: 5, paddingHorizontal: 20}}>
                    <Pressable onPress={() => {console.warn('Get food delivery')}}>
                        <Text style={{color: 'white', paddingVertical:5,}}>Get food delievery</Text>
                    </Pressable>
                </View>
                {/* Make money */}
                <View style={{ padding: 10, paddingHorizontal: 20,}}>
                    <Pressable onPress={() => {console.warn('Make Money Driving')}}>
                        <Text style={{color: 'white', paddingVertical:5,}}>Make money driving</Text>
                    </Pressable>
                </View>
            </View>
            <DrawerItemList {...props} />
            <Pressable onPress={() => {Auth.signOut() }}>
                <Text style={{padding: 15, paddingLeft: 18, color:'black'}}>Sign out</Text>
            </Pressable>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer
