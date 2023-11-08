import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { getAlbum } from "../../Api/Spotify/Repository/SearchFunctions";

const ArtistaMusica = ({ item, navigation }) => {
  const { height, width } = Dimensions.get("window");

  const max = 40;
  const nameMax =
    item.name.length > max ? `${item.name.substring(0, max)}...` : item.name;

  const data = item.release_date;
  const ano = data.match(/\d{4}/)[0];

  async function dados() {
    const data = await getAlbum(item.id);

    navigation.navigate("Album", {
      item: data,
    });
  }

  return (
    <Pressable onPress={dados}>
      <View
        style={{
          margin: 5,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgb(30,30,30)",
          width: width * 0.95,
          borderRadius: 5,
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 5 }}
          source={{ uri: item.images[0].url }}
        />
        <View style={{ marginLeft: 10, gap: 2 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>
            {nameMax}
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            {item.album_type + " • " + ano}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ArtistaMusica;
