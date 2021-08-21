/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import { Entypo } from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/HomeScreen';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import { withAuthenticator } from 'aws-amplify-react-native';

import { getCarId } from './src/graphql/queries';
import { createCar } from './src/graphql/mutations';

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

  useEffect(() => {
    const updateUserCar = async () => {
      // Get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache: true});

      if (!authenticatedUser) {
        console.log("User does not exist or user is not authenticated yet")
        return;
      }
      // check if the user has already had a car
      const getCarData = await API.graphql(
        graphqlOperation(getCarId,{
          id: authenticatedUser.attributes.sub,
        })
      )

      
      // If not, create a new car for the user
      if (getCarData.data.getCar) {
        console.log("User already has a car");
        return;
      }   

      const newCar = {
          id: authenticatedUser.attributes.sub,
          type: 'Comfort',
          userId: authenticatedUser.attributes.sub,
      }

      const createCarData = await API.graphql(
        graphqlOperation(createCar, {
            input: newCar
        })
      )
      console.log("Created Car");
      return;
    }
    
    updateUserCar();
  }, [])

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
    </>
  );
};

export default withAuthenticator(App);
