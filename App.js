/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import { StatusBar,  PermissionsAndroid, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import AvailableUberRow from './src/components/AvailableUberRow';
import AvailableUbers from './src/components/AvailableUbers';
import Router from './src/Navigation/Root';

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber Clone App Cocation Permission",
          message:
            "Uber Clone App needs access to your location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    }
    
  }, [])

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Router />
      {/* {<DestinationSearch /> */}
      {/* <AvailableUberRow /> */}

    </>
  );
};

export default App;
