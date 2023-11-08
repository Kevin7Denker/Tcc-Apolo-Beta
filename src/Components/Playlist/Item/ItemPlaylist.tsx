import { Text, View, Image, Pressable, Dimensions } from "react-native";

const ItemPlayList = ({ item, navigation }) => {
  const { width: wWidth, height: hHeight } = Dimensions.get("window");

  function showAvaliation() {
    navigation.navigate("Avaliation", {
      item: item.track,
    });
  }

  const max = 25;

  const nameTrack = item?.track?.name;

  const nameMax =
    nameTrack.length > max ? `${nameTrack.substring(0, max)}...` : nameTrack;

  return (
    <Pressable onPress={showAvaliation} style={{ marginTop: 5 }}>
      <View
        style={{
          backgroundColor: "rgb(30,30,30)",
          height: hHeight * 0.11,
          width: wWidth,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: wWidth * 0.15,
            height: wWidth * 0.15,
            margin: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "#7b2cbf"
          }}
          source={{ uri: item.track.album.images[0].url }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: "white", fontSize: 18 }}>{nameMax}</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{ color: "white", fontSize: 13, width: wWidth * 0.35 }}
            >
              {"Por: " + item.track.album.artists[0].name}
            </Text>
            <View style={{flexDirection: "row"}}>
              <Text style={{ color: "white", fontSize: 13 }}>
                Popularidade: 
              </Text>
              <Text style={{color: "#8632d0"}}>{"  " + item.track.popularity+"%"}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemPlayList;
