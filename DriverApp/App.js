/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StatusBar, View, Text } from 'react-native';

import { Entypo } from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/HomeScreen';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
    </>
  );
};

export default App;
