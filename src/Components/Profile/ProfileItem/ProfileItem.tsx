import { View, Text, Image, Pressable } from "react-native";

const ProfileItem = ({ item, navigation }) => {
  function goToInfo() {
    navigation.navigate("Info", {
      item: item,
    });
  }
  
  return (
    <View>
      <View style={{ flexDirection: "column", margin: 1}}>
        <Pressable onPress={goToInfo}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: item.musica.album.images[0].url }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileItem;
