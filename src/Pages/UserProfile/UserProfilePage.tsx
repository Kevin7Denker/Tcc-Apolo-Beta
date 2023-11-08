import { useEffect, useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { getPerfil } from "../../Api/Spotify/Repository/UserFunctions";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Styles/UserProfile";
import {
  getAvaliacoes,
  getNumAval,
} from "../../Api/Firebase/Repository/Repository";
import ProfileItem from "../../Components/Profile/ProfileItem/ProfileItem";

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [num, setNum] = useState(null);
  const [userItems, setUserItems] = useState<any>([]);

  async function getData() {
    const perfil = await getPerfil();
    const number = await getNumAval();
    const aval = await getAvaliacoes();

    setUser(perfil);
    setNum(number);
    setUserItems(aval);
  }

  useEffect(() => {
    getData();
  });

  return (
    <LinearGradient
      colors={["#5a189a", "rgb(10,10,10)", "black"]}
      style={{ flex: 1 }}
    >
      <View>
        <Ionicons
          style={styles.icon}
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <View style={styles.userImage}>
          <Image style={styles.image} source={{ uri: user?.images[1]?.url }} />
          <Text style={styles.userName}>{user?.display_name}</Text>
        </View>
        <View style={styles.informations}>
          <View style={styles.info}>
            <Text style={styles.infoValue}>{num}</Text>
            <Text style={styles.avalText}> Avaliações</Text>
          </View>
          <View>
            <View style={styles.info}>
              <Text style={styles.infoValue}> X</Text>
              <Text style={styles.followerText}> Seguidores</Text>
            </View>
          </View>
        </View>
        <View style={styles.items}>
          <FlatList
            data={userItems}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={4}
            renderItem={({ item }) => (
              <ProfileItem item={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default UserProfile;
