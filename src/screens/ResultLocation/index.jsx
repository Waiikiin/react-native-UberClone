import React from 'react'
import { View, Text } from 'react-native'
import AvailableUbers from '../../components/AvailableUbers'
import HomeMap from '../../components/HomeMap'

const ResultLocation = () => {
    return (
        <View>
            <HomeMap />
            <AvailableUbers />
        </View>
    )
}

export default ResultLocation
