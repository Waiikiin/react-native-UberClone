import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        flex: 1,
        justifyContent: "space-between",
    },

    mapContainer: {
        flex: 2.5,
        // height: Dimensions.get('window').height - 400,
    },
    
    ubersContainer: {
        flex: 2.5,
        // height: 400,
    },
})

export default styles;