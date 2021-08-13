import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        height: 35,
        backgroundColor: "#DCDCDC",
        marginHorizontal: 50,
    },
    separator: {
        height: 1,
        backgroundColor: '#e9e9e9',
    },
    autoCompleteContainer: {
        position: "absolute",
        top: 10,
        width: "100%",
    },
    listView: {
        marginVertical: 50,
        borderTopWidth: 1,
        borderTopColor: "#e9e9e9",
        elevation: 15,
    },

    circle: {
        width: 5,
        height: 5,
        backgroundColor: "#145DA0",
        position: 'absolute',
        top: 25,
        left: 25,
        borderRadius: 5,
    },
    line: {
        width: 1,
        height: 30,
        backgroundColor: "#a2a2a2",
        position: 'absolute',
        top: 35,
        left: 27.5,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: "black",
        position: 'absolute',
        top: 70,
        left: 25,
    },

    addIconContainer: {
        position: "absolute",
        right: 5,
        top: 30,
    },

    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    locationIconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50, 
        marginRight: 12,
    },
    
    locationAddressContainer: {
        justifyContent: "center",
    },
    locationPlaceText: {
        fontSize: 13,
        fontWeight: "bold",
    },
    locationAddressText: {
        fontSize: 13,
        color: "#808080",
    },
})

export default styles;