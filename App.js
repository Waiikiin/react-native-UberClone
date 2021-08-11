/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import ResultLocation from './src/screens/ResultLocation';
import AvailableUberRow from './src/components/AvailableUberRow';
import AvailableUbers from './src/components/AvailableUbers';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
      {/*<DestinationSearch /> */}
      {/* <ResultLocation /> */}
      {/* <AvailableUberRow /> */}
    
    </>
  );
};

export default App;
