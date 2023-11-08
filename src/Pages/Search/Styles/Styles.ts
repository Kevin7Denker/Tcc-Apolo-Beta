import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: wWidth * 0.1,
    gap: 20,

  },
  searchBar: {
    backgroundColor: "rgb(20,20,20)",
    color: "white",
    textDecorationColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: wWidth * 0.65,
    position: "relative",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    fontSize: 17,
    borderRadius: 20,
    marginRight: 10,
  },
  lupa: {
    position: "absolute",
    top: 20,
    bottom: 15,
    right: wWidth * 0.08,
  },
  searchBarFocused: {
    borderColor: "purple",
  },
  view: {
    flex: 1,
    backgroundColor: "rgb(30,30,30)"
  },
  items: {
    flex: 3,
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    marginTop: 20
  },
});
