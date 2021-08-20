import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        position: "absolute",
        width: '100%',
        padding: 20,
        height: '100%',
        bottom: 0,
        justifyContent: "flex-end",
    },
    popupContainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 250,
        alignItems: 'center',
        justifyContent: "space-around",
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        width: 100,
        alignItems: "center",
        marginHorizontal: 15,
    },
    declineText: {
        color: 'white',
        fontWeight: "bold",
    },

    userInfoRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    estimationWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },

    uberType: {
        color: 'lightgrey',
        fontSize: 18,
        marginHorizontal: 10,
    },
    userBackground: {
        backgroundColor:  '#008aff',
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'white',
        borderWidth: 3,
    },

    estMin: {
        color: 'white',
        fontSize: 30,
    },
    estDist: {
        color: 'white',
        fontSize: 20,
    },
    lastContainer: {
        borderTopWidth: 1,
        borderTopColor: '#E6E6E6',
        padding: 10,
    }
})


export default styles;