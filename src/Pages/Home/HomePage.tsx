import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View, Text, Pressable } from "react-native";
import CardMusicas from "../../Components/Home/Cards/CardMusicas";
import { styles } from "./Styles/Styles";
import {
  getPerfil,
  getRecentes,
  getRecomendedArtist,
} from "../../Api/Spotify/Repository/UserFunctions";

import ContainerPlaylist from "../../Components/Home/Cards/CardPlaylist";
import Banner from "../../Components/Home/Banner/Banner";
import {
  getAvaliacoes,
  vefUser,
} from "../../Api/Firebase/Repository/Repository";
import ContainerArtista from "../../Components/Busca/ContainerArtista";
import {
  getTopBrasil,
  getTopViral,
  getTopHoje,
  getTopMundo,
} from "../../Api/Spotify/Repository/PlaylistFunctions";

const HomePage = ({ navigation }) => {
  const [perfil, setPerfil] = useState(null);
  const [recentes, setRecentes] = useState<any>([]);
  const [topBrasil, setTopBrasil] = useState<any>([]);
  const [topViral, setTopViral] = useState<any>([]);
  const [topHoje, setTopHoje] = useState<any>([]);
  const [topMundo, setTopMundo] = useState<any>([]);
  const [artistas, setArtistas] = useState<any>([]);
  const [itensVisiveis, setItensVisiveis] = useState(10);

  async function Dados() {
    const perfilData = await getPerfil();
    const recentesData = await getRecentes();
    const topBrasilData = await getTopBrasil();
    const topViralData = await getTopViral();
    const topHojeData = await getTopHoje();
    const topMundoData = await getTopMundo();

    const topArtistas = await getRecomendedArtist();

    getAvaliacoes();
    setArtistas(topArtistas);
    setPerfil(perfilData);
    setTopBrasil(topBrasilData);
    setTopViral(topViralData);
    setTopHoje(topHojeData);
    setTopMundo(topMundoData);
    setRecentes(recentesData);
    vefUser(perfilData);
  }

  useEffect(() => {
    Dados();
  }, []);

  const verMais = () => {
    setItensVisiveis(itensVisiveis + 10);
  };

  return (
    <ScrollView style={styles.view}>
      <View style={styles.banner}>
        <Banner />
      </View>
      <Text style={styles.recomendationText}>Recomendações</Text>
      <FlatList
        data={recentes}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardMusicas item={item} navigation={navigation} />
        )}
      />

      <View style={styles.playlist}>
        <Text style={styles.recomendationText}>Playlists</Text>

        <View style={styles.playlistItem}>
          <ContainerPlaylist item={topBrasil} navigation={navigation} />
          <ContainerPlaylist item={topMundo} navigation={navigation} />
        </View>

        <View style={styles.playlistItem}>
          <ContainerPlaylist item={topHoje} navigation={navigation} />
          <ContainerPlaylist item={topViral} navigation={navigation} />
        </View>
      </View>
      <View>
        <Text style={styles.recomendationText}>Artistas</Text>
        <ScrollView horizontal={true} style={styles.scrollArtists}>
          <FlatList
            data={artistas.slice(0, itensVisiveis)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ContainerArtista item={item} navigation={navigation} />
            )}
          />
          {itensVisiveis < artistas.length && (
            <View style={styles.artists}>
              <Pressable onPress={verMais}>
                <Text style={styles.buttonArtists}>ver mais</Text>
              </Pressable>
            </View>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomePage;
