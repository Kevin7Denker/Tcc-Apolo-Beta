import { Pressable, View, Text } from "react-native";

const ItemAlbum = ({ item, navigation }) => {

  return (
    <Pressable>
      <View style={{padding: 10}}>
        <Text>
            {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default ItemAlbum;
