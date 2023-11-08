import { View, Text, Image, Dimensions, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

const ItemNews = ({ item, navigation }) => {
  const publishedDate = new Date(item.publishedAt);
  const day = String(publishedDate.getDate()).padStart(2, "0");
  const month = String(publishedDate.getMonth() + 1).padStart(2, "0");
  const year = publishedDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  function goToArtigo(){
    navigation.navigate("Artigo", {
        item: item,
      });    
  }

  return (
    <Pressable onPress={goToArtigo}>
      <View
        style={{
          flex: 1,
          margin: 5,
          marginTop: 10,
          maxWidth: wWidth,
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: wWidth * 0.95,
            height: hHeight * 0.22,
            borderRadius: 5,
            opacity: 0.6,
            borderWidth: 2,
            position: "relative",
          }}
          source={{ uri: item.urlToImage }}
        />
        <Text
          style={{
            position: "absolute",
            top: 20,
            left: 10,
            padding: 4,
            fontSize: 10,
            backgroundColor: "#5a189a",
            borderRadius: 5,
            color: "white",
            fontWeight: "700",
          }}
        >
          Recente
        </Text>
        <View style={{ maxWidth: wWidth * 0.9 }}>
          <Text
            style={{
              position: "absolute",
              bottom: 25,
              color: "white",
              left: 10,
              fontSize: 13,
              fontWeight: "600",
              textAlign: "justify"
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              position: "absolute",
              bottom: 6,
              left: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <AntDesign name="calendar" size={16} color="ghostwhite" />
            <Text style={{ color: "ghostwhite", fontSize: 10 }}>
              {formattedDate}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemNews;
