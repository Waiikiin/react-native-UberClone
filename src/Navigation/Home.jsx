import React from 'react';


import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => { 
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: "",
                swipeEnabled: false,
            }}
            drawerContent={(props) => (
                <CustomDrawer {...props} />
            )}
        >
            <Drawer.Screen name={"Home"} component={HomeScreen}/>
            <Drawer.Screen name={"Your Trips"}>
                {() => <DummyScreen name={"Your Trips"} />}
            </Drawer.Screen>
            <Drawer.Screen name={"Wallet"}>
                {() => <DummyScreen name={"Wallet"} />}
            </Drawer.Screen>
            <Drawer.Screen name={"Help"}>
                {() => <DummyScreen name={"Help"} />}
            </Drawer.Screen>
            <Drawer.Screen name={"Uber Pass"}>
                {() => <DummyScreen name={"Uber Pass"} />}
            </Drawer.Screen>
            <Drawer.Screen name={"Send a Gift"}>
                {() => <DummyScreen name={"Send a Gift"} />}
            </Drawer.Screen>
            <Drawer.Screen name={"Settings"}>
                {() => <DummyScreen name={"Settings"} />}
            </Drawer.Screen>
        </Drawer.Navigator> 
    )
}

export default HomeNavigator
