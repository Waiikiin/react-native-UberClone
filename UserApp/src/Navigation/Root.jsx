import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer,  DefaultTheme, DarkTheme, } from '@react-navigation/native';

import HomeNavigator from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import OrderScreen from '../screens/OrderScreen';

const Stack = createNativeStackNavigator();
// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       background:'#FFFFF',
//     },
//   };

/*
    Inside root, stack navigator wraps drawer navigator 
    because we want to show the stack header and hide the drawer headers (for now)
*/
const RootNavigator = (props) => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator

                initialRouteName={"HomeScreen"}>
                    <Stack.Screen 
                        options={{
                            headerShown: false,
                        }}
                        name={"HomeScreen"} component={HomeNavigator} />
                    <Stack.Screen 
                        options={{
                            headerShown: true,
                            headerTitle: "",
                            headerStyle: {
                                backgroundColor: '#EEEEEE',
                                elevation: 0,
                                shadowOpacity: 0,
                                borderBottomWidth: 0,
                                headerHideShadow: true,
                                shadowColor: 'transparent',
                                shadowRadius: 0,
                                shadowOffset: {
                                    height: 0,
                                    wdith: 0,
                                },
                              },
                        }}
                        name={"DestinationSearch"} 
                        component={DestinationSearch} 
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            headerTitle: "",
                            headerTransparent: true,
                            headerStyle: {
                                elevation: 0,
                                shadowOpacity: 0,
                                borderBottomWidth: 0,
                                headerHideShadow: true,
                                shadowColor: 'transparent',
                                shadowRadius: 0,
                                shadowOffset: {
                                    height: 0,
                                    wdith: 0,
                                },
                              },
                        }} 
                        name={"SearchResults"} component={SearchResults} 
                    />
                    <Stack.Screen
                        options={{
                            headerShown: true,
                            headerTitle: "",
                            headerTransparent: true,
                            headerStyle: {
                                elevation: 0,
                                shadowOpacity: 0,
                                borderBottomWidth: 0,
                                headerHideShadow: true,
                                shadowColor: 'transparent',
                                shadowRadius: 0,
                                shadowOffset: {
                                    height: 0,
                                    wdith: 0,
                                },
                              },
                        }} 
                        name={"OrderScreen"} component={OrderScreen} 
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator