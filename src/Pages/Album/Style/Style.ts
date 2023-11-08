import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "rgb(30,30,30)",
  },
  back: {
    width: wWidth,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    position: "relative",
  },
  background: {
    width: wWidth,
    zIndex: -1,
    opacity: 0.25,
    resizeMode: "cover",
  },
  name: {
    zIndex: 2,
    color: "white",
    position: "absolute",
    bottom: 60,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center"
  },
  frontground: {
    width: wWidth / 1.5,
    position: "absolute",
    top: 80,
    resizeMode:"contain",
    borderRadius: 10,
  },
  content: {
    flexDirection: "row"
  },
  imageArtist:{
    width: 80,
    height: 80,
    borderRadius: 100
  } 
});
