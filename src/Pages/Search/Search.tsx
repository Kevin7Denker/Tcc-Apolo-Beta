import React, { useEffect, useState } from "react";
import {
  getArtist,
  getMusica,
  getPlaylists,
} from "../../Api/Spotify/Repository/SearchFunctions";
import { FlatList, TextInput, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./Styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import ContainerMusica from "../../Components/Busca/ContainerMusica";
import ContainerPlaylist from "../../Components/Busca/ContainerPlaylist";
import ContainerArtista from "../../Components/Busca/ContainerArtista";

const SearchPage = ({ route, navigation }) => {
  const [musicas, setMusicas] = useState<any>([]);
  const [artistas, setArtistas] = useState<any>([]);
  const [playlist, setPlayslist] = useState<any>([]);
  const [searchText, setSearchText] = useState<any>();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChangeText = (text: any) => setSearchText(text);

  async function Dados() {
    const musicaData = await getMusica(route?.params?.item);
    const artistasData = await getArtist(route?.params?.item);
    const playlistsData = await getPlaylists(route?.params?.item);

    setMusicas(musicaData);
    setPlayslist(playlistsData);
    setArtistas(artistasData);
  }

  function Buscar() {
    navigation.navigate("Search", {
      item: searchText,
    });

    setSearchText(" ");
  }

  useEffect(() => {
    Dados();
  }, []);

  return (
    <View style={styles.view}>
      <View style={styles.search}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
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
          <Feather name="search" size={25} color="white" style={styles.lupa} />
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Musicas</Text>
        <FlatList
          data={musicas}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ContainerMusica item={item} navigation={navigation} />
          )}
        />
      </View>
      <View>
        <Text style={styles.text}>Playlist</Text>

        <FlatList
          data={playlist.items}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ContainerPlaylist item={item} navigation={navigation} />
          )}
        />
      </View>
      <View>
        <Text style={styles.text}>Artistas</Text>

        <FlatList
          data={artistas}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ContainerArtista item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

export default SearchPage;
