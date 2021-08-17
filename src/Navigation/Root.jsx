import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer,  DefaultTheme, DarkTheme, } from '@react-navigation/native';

import HomeNavigator from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createNativeStackNavigator();
// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       background:'#FFFFF',
//     },
//   };

const RootNavigator = (props) => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator

                initialRouteName={"Home"}>
                    <Stack.Screen 
                        options={{
                            headerShown: false,
                        }}
                        name={"Home"} component={HomeNavigator} />
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator