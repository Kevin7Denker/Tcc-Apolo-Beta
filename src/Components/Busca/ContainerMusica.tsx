import React from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { getMusicaId } from "../../Api/Spotify/Repository/SearchFunctions";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "column",
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 15,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    color: "white",
    marginTop: 5,
    marginLeft: 10,
  },
});

const MAX_NAME_LENGTH = 16;

const ContainerMusica = ({ item, navigation }) => {
  const nameTrack = item?.name;
  const nameMax =
    nameTrack.length > MAX_NAME_LENGTH
      ? `${nameTrack.substring(0, MAX_NAME_LENGTH)}...`
      : nameTrack;

  const showAvaliation = async () => {
    try {
      const data = await getMusicaId(item?.id);
      navigation.navigate("Avaliation", {
        item: data,
      });
    } catch (error) {
      console.error("Error fetching music details:", error);
    }
  };

  return (
    <Pressable onPress={showAvaliation} style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.album?.images[0]?.url }} />
      <Text style={styles.text}>{nameMax}</Text>
    </Pressable>
  );
};

export default ContainerMusica;
