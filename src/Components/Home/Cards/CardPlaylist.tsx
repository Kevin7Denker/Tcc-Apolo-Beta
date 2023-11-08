import React from "react";
import { View, Image, Text, Pressable, Dimensions } from "react-native";

const ContainerPlaylist = ({ item, navigation }) => {
  const { width: wWidth, height: hHeight } = Dimensions.get("window");

  function showPlaylist() {
    navigation.navigate("Playlist", {
      item: item,
    });
  }

  if (!item || !item.images || item.images.length === 0) {
    return (
      <View
        style={{
          margin: 10,
          backgroundColor: "rgb(20,20,20)",
          width: wWidth * 0.4,
          height: hHeight * 0.1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 13, fontWeight: "500", color: "white" }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <Pressable
      onPress={showPlaylist}
      style={{
        backgroundColor: "rgb(20,20,20)",
        width: wWidth * 0.4,
        height: hHeight * 0.1,
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
      }}
    >
      <Image
        style={{
          width: wWidth * 0.15,
          height: hHeight * 0.07,
          borderRadius: 5,
          marginLeft: 10,
        }}
        source={{ uri: item.images[0].url }}
      />
      <View style={{ flexDirection: "column", margin: 7 }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "white",
          }}
        >
          {item.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 12,
            marginTop: 2,
            fontWeight: "500",
            color: "grey",
          }}
        >
          {"Por: " + item.owner.display_name}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContainerPlaylist;
