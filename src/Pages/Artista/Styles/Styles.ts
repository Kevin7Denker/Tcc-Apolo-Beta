import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "rgb(20,20,20)",
  },
  icon: {
    marginTop: wWidth * 0.12,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wWidth * 0.8,
    zIndex: 3,
    position: "absolute",
  },
  background: {
    width: wWidth * 1,
    height: hHeight * 0.5,
    alignContent: "center",
    alignItems: "center",
    opacity: 0.5,
    zIndex: 1,
  },
  gradient: {
    width: wWidth * 1,
    height: hHeight * 0.5,
    opacity: 1,
    zIndex: 2,
  },
  image: {
    width: wWidth * 0.5,
    height: wWidth * 0.5,
    position: "absolute",
    top: hHeight * 0.12,
    zIndex: 3,
    borderRadius: 10,
  },
  musics: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  buttonMusicas: {
    color: "white",
    width: 85,
    padding: 12,
    backgroundColor: "#5a189a",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
    fontWeight: "600"
  },
  name: {
    position: "absolute",
    zIndex: 4,
    color: "white",
    top: hHeight * 0.38,
    fontSize: 24,
    fontWeight: "700",
  },
  follow: {
    position: "absolute",
    zIndex: 4,
    color: "white",
    top: hHeight * 0.44,
    left: 25,
    fontSize: 15,
    fontWeight: "700",
  },
  pop: {
    position: "absolute",
    zIndex: 4,
    color: "white",
    top: hHeight * 0.44,
    right: 25,
    fontSize: 15,
    fontWeight: "700",
  },
  musicas: {
    flexDirection: "column",
    width: wWidth
  },
  textAlbum: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    margin: 5,
    marginTop: 10
  }
});
