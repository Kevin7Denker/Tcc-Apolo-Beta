import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    zIndex: 1,
    top: 50,
    left: 20,
  },
  imageContainer: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  coverImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: "silver",
    fontSize: 13,
    marginTop: 10,
  },
  discContainer: {
    backgroundColor: "rgb(40,40,40)",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  discImage: {
    width: 100,
    height: 100,
  },
  discTitle: {
    color: "white",
  },
  discRating: {
    color: "white",
  },
});

const discImages = {
  Cobre: require("../../../Assets/Discos/Detalhados/Images/Cobre.png"),
  Prata: require("../../../Assets/Discos/Detalhados/Images/Prata.png"),
  Ouro: require("../../../Assets/Discos/Detalhados/Images/Ouro.png"),
  Ametista: require("../../../Assets/Discos/Detalhados/Images/Ametista.png"),
  Diamante: require("../../../Assets/Discos/Detalhados/Images/Diamante.png"),
};

const Info = ({ route, navigation }) => {
  const { item } = route.params;
  const discImage = discImages[item.disco] || discImages.Diamante;

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={30}
        color="white"
      />
      <View style={styles.imageContainer}>
        <Image style={styles.coverImage} source={{ uri: item.musica.album.images[0].url }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.musica.name}</Text>
          <Text style={styles.artist}>{item.musica.album.artists[0].name}</Text>
        </View>
        <View style={styles.discContainer}>
          <Image style={styles.discImage} source={discImage} />
          <Text style={styles.discTitle}>{item.titulo}</Text>
          <Text style={styles.discRating}>{item.avaliacao}</Text>
        </View>
      </View>
    </View>
  );
};

export default Info;
