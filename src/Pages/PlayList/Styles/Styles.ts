import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
    view: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "rgb(20,20,20)",
        position:"relative",
    },
    back: {
        width: wWidth,
        height: 325,
        alignItems: "center",
        justifyContent:"center"
    },
    background:{
        width: wWidth,
        height:250,
        position: "absolute",
        zIndex: -1,
        top: 20,
        opacity: 0.4
    },
    icon: {
        marginTop: wWidth * 0.12,
        marginLeft: wWidth * 0.05,
        marginRight: wWidth * 0.05, 
        zIndex: 1,
    },
    icons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    items:{
        flex:3,
        alignItems: "center",
        marginBottom: 15,
    },
    info: {
        alignItems: "center",
        flex: 0.5,
        justifyContent: "center"
    },
    mainText:{
        fontSize: 45,
        fontWeight: "700",
        color: "white",
        fontStyle: "italic",
     
    }, text: {
        color: "white"
    },
    texts: {
        position: "absolute",
        bottom: 10,
        left: 10
    },

});
