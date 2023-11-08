import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { format } from "date-fns";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 12,
  },
  nome: {
    fontSize: 17,
    color: "white",
    fontWeight: "600",
  },
  musica: {
    color: "grey",
    fontSize: 12,
  },
  musicaImg: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  items: {
    marginTop: 20,
    flexDirection: "row",
  },
  disco: {
    width: 30,
    height: 30,
  },
  discoItem: {
    padding: 2.5,
    borderRadius: 30,
  },
  infos: {
    flexDirection: "column",
    width: wWidth * 0.7,
    marginRight: 15,
  },
  infosText: {
    color: "silver",
    fontSize: 12,
    marginTop: 3,
    textAlign: "justify"
  },
  infosTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "justify"
  },
  names: {
    width: wWidth * 0.32,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
    alignContent: "center",
  },
  data: {
    color: "white",
    fontSize: 12,
  },
  datas: {
    position: "absolute",
    right: 15,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});

const discoImages = {
  Cobre: require("../../Assets/Discos/Detalhados/Images/Cobre.png"),
  Prata: require("../../Assets/Discos/Detalhados/Images/Prata.png"),
  Ouro: require("../../Assets/Discos/Detalhados/Images/Ouro.png"),
  Ametista: require("../../Assets/Discos/Detalhados/Images/Ametista.png"),
  Diamante: require("../../Assets/Discos/Detalhados/Images/Diamante.png"),
};

const FeedItem = ({ posts, navigation }) => {
  const max = 24;
  const maxText = 250;

  const nameMax =
    posts.musica.name.length > max
      ? `${posts.musica.name.substring(0, max)}...`
      : posts.musica.name;

  const textMax =
    posts.text > maxText
      ? `${posts.text.substring(0, maxText)}...`
      : posts.text;

  const dataCompleta = posts.data;
  const partes = dataCompleta.split(" ");
  const data = partes[0];

  function goToAval() {
    navigation.navigate("Avaliation", {
      item: posts.musica,
    });
  }

  const goToSpotify = async () => {
    const spotifyLink = `https://open.spotify.com/track/${posts.musica.id}`;
    Linking.openURL(spotifyLink).catch((err) =>
      console.error("Erro ao abrir o link do Spotify: ", err)
    );
  };

  function formatar(data: string) {
    return format(new Date(data), "dd/MM/yyyy");
  }

  return (
    <View style={{ marginTop: 2 }}>
      <View>
        <View style={styles.container}>
          <View style={styles.info}>
            <Image
              source={{ uri: posts.user.images[1].url }}
              style={styles.imagem}
            />
            <View style={styles.names}>
              <Text style={styles.nome}>{posts.user.display_name}</Text>
              <Text style={styles.musica}>{nameMax}</Text>
            </View>
            <View style={styles.discoItem}>
              <Image style={styles.disco} source={discoImages[posts.disco]} />
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.infos}>
              <Text style={styles.infosTitle}>{posts.title}</Text>
              <Text style={styles.infosText}>{textMax}</Text>
            </View>
            <Image
              source={{ uri: posts.musica.album.images[0].url }}
              style={styles.musicaImg}
            />
          </View>
          <View style={styles.icons}>
            <Pressable onPress={goToAval}>
              <MaterialIcons name="library-music" size={22} color="white" />
            </Pressable>
            <Pressable onPress={goToSpotify}>
              <FontAwesome name="spotify" size={24} color="white" />
            </Pressable>
            <View style={styles.datas}>
              <AntDesign name="calendar" size={16} color="ghostwhite" />
              <Text style={styles.data}>{data}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedItem;
