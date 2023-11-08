import { View, Text, Image, Pressable } from "react-native";

const ContainerArtista = ({ item, navigation }) => {
  function goToArtista() {
    navigation.navigate("Artista", {
      item: item,
    });
  }

  return (
    <Pressable onPress={goToArtista}>
      <View
        style={{
          marginTop: 15,
          flexDirection: "column",
          margin: 10,
          borderRadius: 10,
          backgroundColor: "rgb(20,20,20)",
          width: 130,
          height: 150,
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 100 }}
          source={{ uri: item.images[1]?.url }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 13,
            fontWeight: "500",
          }}
        >
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContainerArtista;
