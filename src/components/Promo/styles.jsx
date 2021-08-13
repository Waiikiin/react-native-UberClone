import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4682B4',
        padding: 15,
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "black",
        fontSize: 10,
        alignItems: "center",
        textAlign: "center",
        alignSelf: 'flex-start',
        borderRadius: 20,
        padding: 5,
        margin: 5,
    },
    buttonText: {
        color: 'white',
    }
});

export default styles;