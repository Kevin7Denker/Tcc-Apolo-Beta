import { Text, Pressable, Image, View } from "react-native";
import React from "react";

const CardMusicas = ({ item, navigation }) => {
  const max = 18;

  const nameTrack = item?.track?.name;

  const nameMax =
    nameTrack.length > max ? `${nameTrack.substring(0, max)}...` : nameTrack;
  
  function showAvaliation() {
    navigation.navigate("Avaliation", {
      item: item.track,
    });
  }

  return (
    <Pressable onPress={showAvaliation} style={{ margin: 10 }}>
      <Image
        style={{ width: 130, height: 130, borderRadius: 15 }}
        source={{ uri: item.track.album.images[0].url }}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: "white",
          marginTop: 10,
          marginLeft: 5,
        }}
      >
        {nameMax}
      </Text>
    </Pressable>
  );
};

export default CardMusicas;
