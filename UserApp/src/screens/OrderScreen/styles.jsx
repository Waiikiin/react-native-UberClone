import { StyleSheet } from "react-native";

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

    orderInfoContainer: {
        flex: 2
    }
})

export default styles;
