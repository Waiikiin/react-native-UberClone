import React, { useState, useEffect } from 'react'
import { View, TextInput, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles'

const DestinationSearch = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    useEffect(() => {
        console.warn('useEffect is deprecated');
        if (origin && destination) {
            console.warn('redirect to results');
        }
        
    }, [origin, destination])

    return (
        <SafeAreaView>
        <View  style={styles.container}>
            <TextInput
                value={origin}
                onChangeText={text => setOrigin(text)}
                style={styles.textInput} 
                placeholder="Current Location" 
            />

            <GooglePlacesAutocomplete
                styles={{
                    textInput: styles.textInput,
                }} 
                placeholder='Where to'
                onPress={(data, details = null) => {
                    setDestination({data, details});
                }}
                query={{
                    key: 'AIzaSyCw2-c4IfIm0iVC2Ac7xclNtYbCUsKKpN4',
                    language: 'en',
                }}
            />
        </View>
        </SafeAreaView>

    )
}

export default DestinationSearch
