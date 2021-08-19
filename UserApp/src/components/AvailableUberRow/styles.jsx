import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain',
    },

    type: {
        fontWeight: "bold",
        fontSize: 17,
        marginBottom: 3,
    },
    
    seats: {
        fontSize: 14,
        fontWeight: "bold",
    },

    price: {
        fontSize: 17,
        fontWeight: "bold",
    },

    time: {
        fontSize: 12,
        fontWeight: "400",
    },

    middleContainer: {
        marginBottom: 10,
        marginHorizontal: 20,
        flex: 1,
    },

    middleWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
})

export default styles;