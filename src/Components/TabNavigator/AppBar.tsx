import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Pressable,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { getPerfil } from "../../Api/Spotify/Repository/UserFunctions";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(20,20,20)",
    paddingTop: 40,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  userImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 50,
    resizeMode: "cover",
    borderColor: "#7b2cbf",
    borderWidth: 1.5,
  },
  searchBar: {
    backgroundColor: "rgb(30,30,30)",
    color: "white",
    textDecorationColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: wWidth * 0.65,
    position: "relative",
    flex: 1,
    fontSize: 14,
    borderRadius: 20,
    marginRight: 10,
    fontFamily: "",
  },
  lupa: {
    position: "absolute",
    top: 15,
    bottom: 15,
    right: wWidth * 0.08,
  },
  searchBarFocused: {
    borderColor: "purple",
  },
});

const AppBar = ({ navigation }) => {
  const [searchText, setSearchText] = useState<any>();
  const [isFocused, setIsFocused] = useState(false);
  const [perfil, setPerfil] = useState(null);

  function Buscar() {
    navigation.navigate("Search", {
      item: searchText,
    });

    setSearchText("");
  }

  function userProfile() {
    navigation.navigate("UserProfile");
  }

  let handleFocus = () => setIsFocused(true);
  let handleBlur = () => setIsFocused(false);
  let handleChangeText = (text: any) => setSearchText(text);

  async function Dados() {
    const perfilData = await getPerfil();
    setPerfil(perfilData);
  }

  useEffect(() => {
    Dados();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <Pressable onPress={() => userProfile()}>
          <Image
            style={styles.image}
            source={{ uri: perfil?.images[1]?.url }}
          />
        </Pressable>
      </View>
      <View style={[isFocused && styles.searchBarFocused]}>
        <TextInput
          placeholder="Pesquisar..."
          style={styles.searchBar}
          placeholderTextColor={"white"}
          value={searchText}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={Buscar}
        />
        {!isFocused && (
          <Feather name="search" size={22} color="white" style={styles.lupa} />
        )}
      </View>
    </View>
  );
};

export default AppBar;
