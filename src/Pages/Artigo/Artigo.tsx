import { View, Image, Text, Pressable, Linking } from "react-native";
import { styles } from "./Styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Artigo = ({ route }) => {
  const navigation = useNavigation();

  const publishedDate = new Date(route?.params?.item?.publishedAt);
  const day = String(publishedDate.getDate()).padStart(2, "0");
  const month = String(publishedDate.getMonth() + 1).padStart(2, "0");
  const year = publishedDate.getFullYear();

  const textoOriginal = route?.params?.item?.content;
  let textoFormatado = textoOriginal;
  textoFormatado = textoFormatado.replace(/\[.*?\]/g, "");

  const partes = textoFormatado.split("...");

  const textoExibido = partes[0];

  const formattedDate = `${day}/${month}/${year}`;

  const goToSite = async () => {
    const Link = `${route?.params?.item?.url}`;
    Linking.openURL(Link).catch((err) =>
      console.error("Erro ao abrir o link: ", err)
    );
  };
  
  return (
    <View style={styles.view}>
      <View style={styles.bar}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Text style={styles.data}>{formattedDate}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: route?.params?.item?.urlToImage }}
        />
        <Text style={styles.title}>{route?.params?.item?.title}</Text>
        <Text style={styles.descricao}>{route?.params?.item?.description}</Text>
        <Text style={styles.content}>{textoExibido}</Text>
        <Pressable onPress={goToSite}>
          <Text style={styles.button}>Ler mais...</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Artigo;
