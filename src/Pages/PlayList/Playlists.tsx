import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, FlatList, Image, Pressable, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Styles/Styles";
import ItemPlayList from "../../Components/Playlist/Item/ItemPlaylist";
import React from "react";

const Playlists = ({ route }) => {
  const navigation = useNavigation();

  const goToSpotify = async () => {
    const spotifyLink = `https://open.spotify.com/playlist/${route.params.item.id}`;
    Linking.openURL(spotifyLink).catch((err) =>
      console.error("Erro ao abrir o link do Spotify: ", err)
    );
  };

  const data = route?.params?.item?.tracks?.items;
  return (
    <View style={styles.view}>
      <View style={styles.icons}>
        <Ionicons
          style={styles.icon}
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Pressable onPress={goToSpotify}>
          <FontAwesome style={styles.icon}name="spotify" size={30} color="white" />
        </Pressable>
      </View>
      <View style={styles.back}>
        <View style={styles.info}>
          <Text style={styles.mainText}>{route?.params?.item?.name}</Text>
        </View>
        <Image
          style={styles.background}
          source={{ uri: route.params.item.images[0].url }}
        />
        <View style={styles.texts}>
          <Text style={styles.text}>
            {"Publicado por:  " + route.params.item.owner.display_name}
          </Text>
        </View>
      </View>
      <View style={styles.items}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemPlayList item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

export default Playlists;
