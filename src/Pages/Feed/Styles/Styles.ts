import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: "rgb(30,30,30)",
  },
  feed: {
    flex: 1,
  },
  items: {
    height: hHeight,
    position: "relative",
    marginBottom: 65,
  },
  plusIcon: {
    position: "absolute",
    right: 10,
    bottom: 85
  },
});
