import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "rgb(30,30,30)",
    width: wWidth,
  },
  bar: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wWidth * 0.12,
    marginLeft: wWidth * 0.05,
    marginRight: wWidth * 0.05,
    marginBottom: wWidth * 0.05,
  },
  data: {
    color:"white",
    fontWeight: "700"
  },
  container: {
    padding: 15,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  image: {
    width: wWidth * 0.95,
    height: hHeight * 0.25,
    borderRadius: 5,
    opacity: 0.6,
    borderWidth: 2,
  },
  title: {
    width: wWidth * 0.95,
    color: "white",
    marginTop: 10,
    fontWeight: "700",
    fontSize: 17,
    textAlign: "justify",
  },
  descricao: {
    color: "silver",
    textAlign: "justify",
    fontSize: 12,
    padding: 10
  },
  content: {
    width: wWidth * 0.95,
    color: "white"
  },
  button: {
    color: "white",
    width: wWidth * 0.4,
    padding: 15,
    backgroundColor: "#5a189a",
    textAlign: "center",
    borderRadius: 5,
    marginTop: 20
  }
});
