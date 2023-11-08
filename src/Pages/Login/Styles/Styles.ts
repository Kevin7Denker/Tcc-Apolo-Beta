import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "black"
  },
  button: {
    backgroundColor: "#7b2cbf",
    width: wWidth * 0.6,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  container: {
    position: "absolute",
    backgroundColor: "rgb(30,30,30)",
    bottom: 0,
    width: wWidth,
    height: hHeight * 0.3,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    gap: 45,
  },
  welcome: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    marginTop: 45,
  },
  att: {
    color: "white"
  },
  logo: {
    width: wWidth * 0.4,
    height: wWidth * 0.4,
    top: -550,
    zIndex: 2,
    position: "absolute"
  }
});
