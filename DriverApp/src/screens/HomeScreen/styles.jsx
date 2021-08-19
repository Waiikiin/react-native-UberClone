import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    map: {
        width: '100%', 
        height: Dimensions.get('window').height - 120,
    },

    mapButton: {
        position: "absolute",
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
    },
    
    balanceButton: {
        position: "absolute",
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 50,
        top: 13,
        left: Dimensions.get('window').width/2 - 43,
    },
    balanceText: {
        fontSize: 25,
        color: 'white',
        fontWeight: "bold",
    },
    dollarSign: {
        color: 'green',
    },
    goButton: {
        position: "absolute",
        backgroundColor: '#1495ff',
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 100,
        bottom: 130, 
        alignItems: "center",
        justifyContent: "center",
        left: Dimensions.get('window').width/2 - 33,
        width: 75,
        height: 75,
    },
    goText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },

    bottomContainer: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    bottomText: {
        fontSize: 22,
        color: '#4a4a4a',
    },
})

export default styles;