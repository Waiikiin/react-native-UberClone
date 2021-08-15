import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        flex: 1,
        justifyContent: "space-between",
    },

    mapContainer: {
        flex: 3,
        // height: Dimensions.get('window').height - 400,
    },
    
    ubersContainer: {
        flex: 2.5,
        // height: 400,
    },


    creditCardContainer: {
        marginHorizontal:20,
        height: 40,
        flex: 0.3,
    },
    confirm: {
       color: 'white',
       fontWeight: 'bold',
    },
    button: {
        padding: 10,
        backgroundColor: 'black',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 15,
    },
})

export default styles;