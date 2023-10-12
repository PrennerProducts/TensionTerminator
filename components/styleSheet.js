import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        bottom: "10%",
    },
    button: {
        display: "flex",
        height: 62,
        width: 300,
//        padding: 10,
        backgroundColor: "#0650b0",
        borderRadius: 20,
        marginTop: "10%",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: '#ffffff',
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        top: "5%",
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        top: "5%",
        backgroundColor: '#ffffff',
    },
    row: {
        flexDirection: "row",
    },
    roundButton: {
        width: 60,
        color: '#640a12',
    }
});
export default styles;