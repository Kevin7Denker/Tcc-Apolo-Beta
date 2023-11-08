import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "rgb(30,30,30)",
  },
  recomendationText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  playlist: {
    flex: 1,
    marginTop: 10,
  },
  playlistItem: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    gap: 10,
  },
  banner: {
    flex: 1,
    width: wWidth,
    alignItems:"center",
    marginTop: 15
  },
  scrollArtists: {
    paddingBottom: 80
  },
  artists: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25
  },
  buttonArtists: {
    color: "white",
    width: 85,
    padding: 12,
    backgroundColor: "#5a189a",
    marginLeft: 10,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
    fontWeight: "600"
  }
});
