import { Dimensions, StyleSheet } from "react-native";
const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  icon: {
    marginTop: wWidth * 0.12,
    marginLeft: wWidth * 0.05,
    zIndex: 1,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 1000,
    borderColor: "rgba(255,255,255, 0.1)",
    borderWidth: 5,
  },
  userImage: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    marginTop: 20,
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
  informations: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    width: wWidth * 1,
    gap: wWidth * 0.2,
  },
  info: {
    flexDirection: "column",
    alignItems: "center",
  },
  avalText: {
    color: "white",
  },
  followerText: {
    color: "white",
  },
  infoValue: {
    color: "white",
    fontWeight:"600"
  },
  items: {
    marginTop: 35,
  },
});
