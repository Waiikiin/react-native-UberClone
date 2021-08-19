import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const PlaceRow = ({data}) => {

    const splitAddress = (fullAddress) => {
        const place = fullAddress.split(",")[0];
        const address = fullAddress.search(",") > 0 ? fullAddress.substring(fullAddress.search(",") + 2) : "";

        return [place, address];
    }

    const renderIcon = () => {
        if (data.description === 'Home' )
            return (<View style={[
                        styles.locationIconContainer,
                        {backgroundColor: "#145DA0"} ]}>
                        <Entypo name='home' size={20} color={'white'} />
                    </View>)
        if (data.description === 'Work')
            return (<View 
                        style={[
                            styles.locationIconContainer,
                            {backgroundColor: "#145DA0"} ]}>
                        <MaterialIcons name='work' size={20} color={'white'} />
                    </View>)  
        return (<View style={styles.locationIconContainer}>
                    <Entypo name='location-pin' size={20} color={'white'} />
                </View>)
    }
    return (
        <View style={styles.row}>
                {renderIcon()}

            { data.isCurrentLocation || data.isPredefinedPlace
                ?  
                <Text style={styles.locationPlaceText}>{data.description}</Text>
                :
                <View style={styles.locationAddressContainer}>
                    <Text style={styles.locationPlaceText}>
                        {data.description ? splitAddress(data.description)[0] : splitAddress(data.vicinity)[0]}</Text>
                    <Text style={styles.locationAddressText}>
                        {data.description ? splitAddress(data.description)[1] : splitAddress(data.vicinity)[1]}</Text>
                </View>
            }
            

            
        </View>
    )
}

export default PlaceRow
