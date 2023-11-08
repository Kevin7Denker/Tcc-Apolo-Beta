import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  view: {
    position: "relative",
  },
  image: {
    flexDirection: "column",
    marginTop: wWidth * 0.12,
    marginLeft: wWidth * 0.05,
  },
  container: {
    backgroundColor: "rgb(15,15,15)",
    zIndex: -1,
    width: wWidth,
    height: hHeight * 0.9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: hHeight * 0.3,
    alignItems: "center",
  },
  viewImage: {
    flex: 1,
    alignItems: "center",
  },
  img: {
    marginTop: 20,
    left: 22,
    width: wWidth * 0.8,
    height: hHeight * 0.4,
    borderRadius: 25,
    position: "absolute",
    alignItems: "center",
  },
  text: {
    color: "white",
    marginTop: wWidth * 0.3,
    fontSize: 24,
    fontWeight: "700",
    alignItems: "center",
  },
  texts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  artistText: {
    color: "#909090",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 10,
    marginLeft: 5,
    alignItems: "center",
  },
  avaliacao: {
    alignItems: "center",
    marginTop: 15,
  },
  notas: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "rgb(30,30,30)",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    alignItems: "center",
  },
  discos: {
    width: 55,
    height: 55,
    alignItems: "center",
    padding: 10,
  },
  notasText: {
    fontSize: 18,
    color: "white",
    alignItems: "center",
  },
  more: {
    marginTop: 20,
    alignItems: "center",
  },
  moreText: {
    fontSize: 18,
    color: "white",
    alignItems: "center",
  },
  moreContainerArtista: {
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  moreImage: {
    width: wWidth * 0.3,
    height: wWidth * 0.3,
    borderRadius: 10,
  },
  moreContainerAlbum: {
    flexDirection: "column",
  },
  moreRow: {
    flexDirection: "row",
    gap: 15,
  },
  moreContainerText: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    fontWeight: "700",
  },
  moreDetails: {
    padding: 5,
    backgroundColor: "rgb(30,30,30)",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "column",
    width: wWidth * 0.85,
  },
  info: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 10,
  },
  artistInfo: {
    gap: 10,
  },
  infoText: {
    fontSize: 13,
    fontWeight: "600",
    color: "white",
  },
  Image: {
    width: 50,
    height: 50,
  },
  TextDisc: {
    color: "white",
    padding: 10,
    fontWeight: "500",
  },
  TextTitle: {
    width: 250,
    height: 35,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    color: "gray",
    marginTop: 50,
  },
  TextInput: {
    width: 250,
    height: 35,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    color: "gray",
    marginTop: 50,
  },
  button: {
    marginTop: 60,
    backgroundColor: "#5a189a",
    padding: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center"
  },
  textButton: {
    color: "white",
    fontWeight: "700",
  },
  avalPosted: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(30,30,30)",
    padding: 12,
    margin: 10,
    width: wWidth * 0.7,
    borderRadius: 10,
    gap: 10,
    position: "relative",
  },
  textPosted: {
    width: wWidth * 0.6,
  },
  tit: {
    color: "white",
    fontSize: 20,
  },
  tits: {
    alignItems: "center",
  },
  tico: {
    color: "gray",
    fontSize: 12,
    marginTop: 10,
  },
  pencil: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  titleUpdate: {
    color: "white",
    fontWeight: "800",
  },
  inputUpdate: {
    width: 250,
    height: 35,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    color: "gray",
  },
  containerUpdate: {
    gap: 20,
  },
});