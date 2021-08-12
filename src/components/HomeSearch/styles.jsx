import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         flex: 1,
    },
    
    inputBox: {
        flexDirection: "row",
        backgroundColor: "#DCDCDC",
        margin: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputText: {
        fontSize: 18,
        fontWeight: "600",
        color:  "black",
        margin: 10,
    },
    timeWrapper:{
        borderLeftWidth: 0.3,
        margin: 8,
      },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 90,
        padding: 5,
        backgroundColor: "#FFF",
        borderRadius: 15, 
        alignItems: "center",
        marginLeft: 8,
    },

    row: {
        backgroundColor: '#fff',
        flexDirection: "row",
        padding: 10,
    },
    iconContainer: {
        margin: 8,
    },
    destinationContainer: {
        marginLeft: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        flex: 1,
        borderColor: "#A9A9A9",
    },
    destinationTextBig: {
        fontSize: 15,
        fontWeight: "900",
    },
    destinationTextSmall: {
        fontSize: 12,
        fontWeight: "400",
        color: "#474747",
    }
})

export default styles;
