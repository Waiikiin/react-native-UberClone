import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    
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
        width: 110,
        height: 45,
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
        bottom: 150, 
        alignItems: "center",
        justifyContent: "center",
        left: Dimensions.get('window').width/2 - 33,
        width: 80,
        height: 80,
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
        fontSize: 20,
        color: '#4a4a4a',
    },

    estimationInfoBarContainer: {
        alignItems: "center",
    },
    estimationInfoBar: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
    },
    estimationText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    userBackground: {
        backgroundColor: '#48d42a',
        borderRadius: 100,
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
    },

    customerInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "#CCCCCC",
    },

    completeButton: {
        flexDirection: "row",
        backgroundColor: 'red',
        padding: 15,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    completeText: {
        color: 'white',
        fontWeight: "bold",
    },
    completeArrow: {
        position: "absolute",   
        left: 20,
    }
})

export default styles;