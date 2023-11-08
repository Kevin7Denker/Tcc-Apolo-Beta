import {
  View,
  Image,
  Text,
  Animated,
  Dimensions,
  ViewBase,
} from "react-native";
import { styles } from "./Style/Style";
import { FlatList } from "react-native";
import ItemAlbum from "../../Components/Album/ItemAlbum";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { getArtistId } from "../../Api/Spotify/Repository/SearchFunctions";

const Album = ({ route, navigation }) => {
  const data = route?.params?.item?.tracks?.items;
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const { height, width } = Dimensions.get("window");
  const [artista, setArtista] = useState<any>([]);

  useEffect(() => {
    Dados();
  }, []);

  const BackImage = scrollY.interpolate({
    inputRange: [0, height / 2.5],
    outputRange: [height / 2.5, 10],
    extrapolate: "clamp",
  });

  const FrontImage = scrollY.interpolate({
    inputRange: [0, height / 4],
    outputRange: [width / 2, 10],
    extrapolate: "clamp",
  });

  async function Dados() {
    const data = await getArtistId(route.params.item.artists[0].id);
    setArtista(data);
  }

  return (
    <View style={styles.view}>
      <ScrollView>
        <View style={styles.back}>
          <Animated.Image
            source={{ uri: route.params.item.images[0].url }}
            style={[styles.background, { height: BackImage }]}
          />

          <Animated.Image
            source={{ uri: route.params.item.images[0].url }}
            style={[styles.frontground, { height: FrontImage }]}
          />
          <Text style={styles.name}>{route.params.item.name}</Text>
        </View>
        <View style={styles.content}>
          <Text>{artista.name}</Text>
        </View>
        <View>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemAlbum item={item} navigation={navigation} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Album;
