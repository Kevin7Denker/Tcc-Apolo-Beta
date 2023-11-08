import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Styles/Styles";
import { useNavigation } from "@react-navigation/native";
import { getArtist } from "../../Api/Spotify/Repository/SearchFunctions";
import { format } from "date-fns";
import { Modalize } from "react-native-modalize";
import { EvilIcons } from "@expo/vector-icons";
import {
  setAvaliacao,
  postAvaliation,
  Validation,
  updateAvaliation,
} from "../../Api/Firebase/Repository/Repository";
import { getPerfil } from "../../Api/Spotify/Repository/UserFunctions";

const discoImages = {
  Cobre: require("../../Assets/Discos/Detalhados/Images/Cobre.png"),
  Prata: require("../../Assets/Discos/Detalhados/Images/Prata.png"),
  Ouro: require("../../Assets/Discos/Detalhados/Images/Ouro.png"),
  Ametista: require("../../Assets/Discos/Detalhados/Images/Ametista.png"),
  Diamante: require("../../Assets/Discos/Detalhados/Images/Diamante.png"),
};

const AvaliationPage = ({ route }) => {
  const navigation = useNavigation();

  const [artista, setArtista] = useState<any>([]);
  const [disco, setDisco] = useState<any>();

  const Ref = useRef(null);
  const Update = useRef(null);

  const max = 22;
  const maxAlbumLenght = 18;

  const nameTrack = route?.params?.item?.name;
  const nameMax =
    nameTrack.length > max ? `${nameTrack.substring(0, max)}...` : nameTrack;

  const nameAlbum = route?.params?.item?.album?.name;
  const maxAlbum =
    nameAlbum.length > maxAlbumLenght
      ? `${nameAlbum.substring(0, maxAlbumLenght)}...`
      : nameAlbum;

  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>("");
  const [validation, setValidation] = useState<any>([]);

  const changeText = (text: string) => setText(text);
  const changeTitle = (text: string) => setTitle(text);

  const disc = validation.disco;
  const tit = validation.titulo;
  const avali = validation.avaliacao;

  const dataArtista = route?.params?.item?.artists[0]?.name;

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const id = await getPerfil();
    const valData = await Validation(id.id, route?.params?.item?.name);
    setValidation(valData);

    try {
      const responseArtista = await getArtist(dataArtista);

      setArtista(responseArtista[0]);
    } catch (error) {
      console.log("Erro ao obter dados:", error);
    }
  }

  function formatar(data: string | number | Date) {
    return format(new Date(data), "dd/MM/yyyy");
  }

  const placeholder = avali?.length > 20 ? avali.slice(0, 20) + "..." : avali;

  function openModal(disc: String) {
    Ref.current?.open();
    setDisco(disc);
  }

  function closeModal() {
    Ref.current?.close();
  }

  function openUpdate() {
    Update.current?.open();
  }

  const Avaliar = async () => {
    try {
      const perfil = await getPerfil();

      await setAvaliacao(route?.params?.item, title, text, disco, perfil.id);

      const currentTime = new Date();
      const formattedDate = currentTime.toLocaleString();

      await postAvaliation(
        route?.params?.item,
        title,
        text,
        disco,
        perfil.id,
        perfil,
        formattedDate
      );
      closeModal();
      changeText("");
      changeTitle("");

      Alert.alert("Sucesso", "Avaliação cadastrada!");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const [newDisc, setNewDisc] = useState<string>("");
  const [editText, setEditText] = useState();
  const [editAval, setEditAval] = useState();

  const Editar = async (disco: string) => {
    setNewDisc(disco);
  };

  async function Atualizar() {
    const id = await getPerfil();
    try {
      updateAvaliation(
        id,
        newDisc,
        editText,
        editAval,
      );
      Update.current.close();
    } catch (err) {
      console.log(err);
    }
  }
  
  

  return (
    <LinearGradient
      colors={["#5a189a", "rgb(10,10,10)", "black"]}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.view}>
        <View style={styles.image}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={30}
            color="white"
          />

          <View style={styles.viewImage}>
            <Image
              style={styles.img}
              source={{ uri: route?.params?.item?.album?.images[0].url }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>{nameMax}</Text>
          <View style={styles.texts}>
            {route?.params?.item?.artists?.map(
              (
                item: {
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal;
                },
                index: React.Key
              ) => (
                <Text key={index} style={styles.artistText}>
                  {item.name}
                </Text>
              )
            )}
          </View>

          <View style={styles.avaliacao}>
            <Text style={styles.notasText}>Avaliação</Text>
            {validation == false ? (
              <View style={styles.notas}>
                <Pressable onPress={() => openModal("Cobre")}>
                  <Image
                    style={styles.discos}
                    source={require("../../Assets/Discos/Minimalista/Images/Cobre.png")}
                  />
                </Pressable>
                <Pressable onPress={() => openModal("Prata")}>
                  <Image
                    style={styles.discos}
                    source={require("../../Assets/Discos/Minimalista/Images/Prata.png")}
                  />
                </Pressable>
                <Pressable onPress={() => openModal("Ouro")}>
                  <Image
                    style={styles.discos}
                    source={require("../../Assets/Discos/Minimalista/Images/Ouro.png")}
                  />
                </Pressable>
                <Pressable onPress={() => openModal("Ametista")}>
                  <Image
                    style={styles.discos}
                    source={require("../../Assets/Discos/Minimalista/Images/Ametista.png")}
                  />
                </Pressable>
                <Pressable onPress={() => openModal("Diamante")}>
                  <Image
                    style={styles.discos}
                    source={require("../../Assets/Discos/Minimalista/Images/Diamante.png")}
                  />
                </Pressable>
              </View>
            ) : (
              <View style={styles.avalPosted}>
                <Pressable style={styles.pencil} onPress={openUpdate}>
                  <EvilIcons name="pencil" size={26} color="white" />
                </Pressable>
                <View>
                  <Image style={styles.Image} source={discoImages[disc]} />
                </View>
                <View style={styles.textPosted}>
                  <View style={styles.tits}>
                    <Text style={styles.tit}>{tit}</Text>
                  </View>
                  <Text style={styles.tico}>{avali}</Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.more}>
            <Text style={styles.moreText}>Mais Informações</Text>
            <View style={styles.moreDetails}>
              <Text style={styles.moreContainerText}>
                {route?.params?.item?.album.album_type}
              </Text>
              <View style={styles.moreContainerAlbum}>
                <View style={styles.moreRow}>
                  <Text style={styles.info}>{"Nome: " + maxAlbum}</Text>
                  <Text style={styles.info}>
                    {"Data: " +
                      formatar(route?.params?.item?.album?.release_date)}
                  </Text>
                </View>
              </View>
              <Text style={styles.moreContainerText}>Artista</Text>
              <View style={styles.moreContainerArtista}>
                {artista.images && artista.images[0]?.url ? (
                  <Image
                    style={styles.moreImage}
                    source={{ uri: artista.images[0].url }}
                  />
                ) : null}
                <View style={styles.artistInfo}>
                  {artista && (
                    <>
                      {artista.name && (
                        <Text style={styles.infoText}>
                          {"Nome: " + artista.name}
                        </Text>
                      )}
                      {artista.genres && artista.genres.length > 0 && (
                        <Text style={styles.infoText}>
                          {"Gênero: " + artista.genres[0]}
                        </Text>
                      )}
                      {artista.followers && (
                        <Text style={styles.infoText}>
                          {"Seguidores: " + artista.followers.total}
                        </Text>
                      )}
                      {artista.popularity && (
                        <Text style={styles.infoText}>
                          {"Popularidade: " + artista.popularity + "%"}
                        </Text>
                      )}
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modalize
        ref={Ref}
        modalHeight={550}
        modalStyle={{
          backgroundColor: "rgb(20,20,20)",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 10,
          alignItems: "center",
        }}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Image style={styles.Image} source={discoImages[disco]} />
          <Text style={styles.TextDisc}>{disco}</Text>
          <TextInput
            style={styles.TextTitle}
            inputMode="text"
            multiline={true}
            maxLength={50}
            value={title}
            placeholder="Titulo."
            placeholderTextColor="gray"
            onChangeText={changeTitle}
          />
          <TextInput
            style={styles.TextInput}
            inputMode="text"
            multiline={true}
            maxLength={250}
            value={text}
            placeholder="Resenha."
            placeholderTextColor="gray"
            onChangeText={changeText}
          />
        </View>
        <Pressable style={styles.button} onPress={Avaliar}>
          <Text style={styles.textButton}>Enviar</Text>
        </Pressable>
      </Modalize>
      <Modalize
        ref={Update}
        modalHeight={550}
        modalStyle={{
          backgroundColor: "rgb(20,20,20)",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 10,
          alignItems: "center",
        }}
      >
        <View style={styles.containerUpdate}>
          <View style={styles.notas}>
            <Pressable onPress={() => Editar("Cobre")}>
              <Image
                style={styles.discos}
                source={require("../../Assets/Discos/Minimalista/Images/Cobre.png")}
              />
            </Pressable>
            <Pressable onPress={() => Editar("Prata")}>
              <Image
                style={styles.discos}
                source={require("../../Assets/Discos/Minimalista/Images/Prata.png")}
              />
            </Pressable>
            <Pressable onPress={() => Editar("Ouro")}>
              <Image
                style={styles.discos}
                source={require("../../Assets/Discos/Minimalista/Images/Ouro.png")}
              />
            </Pressable>
            <Pressable onPress={() => Editar("Ametista")}>
              <Image
                style={styles.discos}
                source={require("../../Assets/Discos/Minimalista/Images/Ametista.png")}
              />
            </Pressable>
            <Pressable onPress={() => Editar("Diamante")}>
              <Image
                style={styles.discos}
                source={require("../../Assets/Discos/Minimalista/Images/Diamante.png")}
              />
            </Pressable>
          </View>
          <Text style={styles.titleUpdate}>{"Disco: " + newDisc}</Text>
          <Text style={styles.titleUpdate}>Titulo</Text>
          <TextInput
            style={styles.inputUpdate}
            inputMode="text"
            multiline={true}
            maxLength={50}
            value={editText}
            placeholder={tit}
            placeholderTextColor="gray"
            onChangeText={changeTitle}
          />
          <Text style={styles.titleUpdate}>Avaliação</Text>
          <TextInput
            style={styles.inputUpdate}
            inputMode="text"
            multiline={true}
            maxLength={50}
            value={editAval}
            placeholder={placeholder}
            placeholderTextColor="gray"
            onChangeText={changeTitle}
          />
        </View>
        <Pressable style={styles.button} onPress={Atualizar}>
          <Text style={styles.textButton}>Enviar</Text>
        </Pressable>
      </Modalize>
    </LinearGradient>
  );
};

export default AvaliationPage;