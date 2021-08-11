import React from 'react'
import { View, Text } from 'react-native'

import HomeMap from '../../components/HomeMap/'
import UberEats from '../../components/UberEats/'
import HomeSearch from '../../components/HomeSearch/'

const HomeScreen = (props) => {
    return (
        <View>
            <UberEats />
            <HomeMap />
            <HomeSearch />
        </View>
    )
}

export default HomeScreen;
