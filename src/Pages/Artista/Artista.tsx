import {
  View,
  Image,
  Linking,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Styles/Styles";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { getArtistAlbum } from "../../Api/Spotify/Repository/SearchFunctions";
import ArtistaMusica from "../../Components/Artista/ArtistaMusica";

const Artista = ({ route, navigation }) => {
  const [musicas, setMusicas] = useState<any>([]);
  const [itensVisiveis, setItensVisiveis] = useState(3);

  const goToSpotify = async () => {
    const spotifyLink = `https://open.spotify.com/artist/${route.params.item.id}`;
    Linking.openURL(spotifyLink).catch((err) =>
      console.error("Erro ao abrir o link do Spotify: ", err)
    );
  };

  async function Dados() {
    const data = await getArtistAlbum(route.params.item.id);
    setMusicas(data.items);
  }

  const verMais = () => {
    setItensVisiveis(itensVisiveis + 5);
  };

  useEffect(() => {
    Dados();
  }, []);

  return (
    <ScrollView style={styles.view}>
      <View style={{ alignItems: "center" }}>
        <LinearGradient
          style={styles.gradient}
          colors={["silver", "rgb(20,20,20)"]}
        >
          <ImageBackground
            style={styles.background}
            source={{ uri: route?.params?.item?.images[0].url }}
          />
        </LinearGradient>
        <Image
          style={styles.image}
          source={{ uri: route?.params?.item?.images[0].url }}
        />
        <Text style={styles.name}>{route?.params?.item?.name}</Text>
        <Text style={styles.follow}>
          {"Seguidores: " + route?.params?.item?.followers.total}
        </Text>
        <Text style={styles.pop}>
          {"Popularidade: " + route?.params?.item?.popularity + "%"}
        </Text>
        <View style={styles.icons}>
          <Ionicons
            style={styles.icon}
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={30}
            color="white"
          />
          <Pressable style={styles.icon} onPress={goToSpotify}>
            <FontAwesome name="spotify" size={30} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.musicas}>
        <Text style={styles.textAlbum}>Álbuns</Text>
        <FlatList
          data={musicas.slice(0, itensVisiveis)}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ArtistaMusica item={item} navigation={navigation} />
          )}
        />
        {itensVisiveis < musicas.length && (
          <View style={styles.musics}>
            <Pressable onPress={verMais}>
              <Text style={styles.buttonMusicas}>ver mais</Text>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Artista;
