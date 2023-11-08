import { View, Text, Image, Pressable } from "react-native";
import { getPlaylist } from "../../Api/Spotify/Repository/SearchFunctions";

const ContainerPlaylist = ({ item, navigation }) => {

  const MAX_NAME_LENGTH = 16;
  const nameTrack = item?.name;
  const nameMax =
    nameTrack.length > MAX_NAME_LENGTH
      ? `${nameTrack.substring(0, MAX_NAME_LENGTH)}...`
      : nameTrack;

  const showPlaylist = async () => {
    try {
        const play = await getPlaylist(item.name)
      navigation.navigate("Playlist", {
        item: play,
      });
    } catch (error) {
      console.error("Error fetching music details:", error);
    }
  };

  return (
    <Pressable onPress={showPlaylist}>
      <View
        style={{
          marginTop: 15,
          flexDirection: "column",
          margin: 10,
          borderRadius: 10,
        }}
      >
        <Image
          style={{ width: 130, height: 130, borderRadius: 15 }}
          source={{ uri: item.images[0].url }}
        />
        <Text
          style={{
            fontSize: 13,
            fontWeight: "500",
            color: "white",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          {nameMax}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContainerPlaylist;
