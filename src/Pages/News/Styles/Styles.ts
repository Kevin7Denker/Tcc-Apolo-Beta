import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    backgroundColor: "rgb(30,30,30)",
    flex: 1,
  },
  mainText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  loadMoreButton: {
    margin: 10,
    padding: 10,
    width: wWidth * 0.6,
    backgroundColor: "#5a189a",
    borderRadius: 5,
  },
  loadMoreText: {
    textAlign: "center",
    color: "white",
  },
  container: {
    marginBottom: 80,
    alignItems:"center",
  }
});
