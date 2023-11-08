import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { hideAsync } from "expo-splash-screen";
import { getPerfil } from "../../Api/Spotify/Repository/UserFunctions";

const SplashScreen = ({ navigation }) => {
  const [last, setLast] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function onPlayBackUpdade(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (last.isLoaded !== status.isLoaded) {
        hideAsync();
        checkAuthentication();
      }
      if (status.didJustFinish) {
        if (isAuthenticated == false) {
          navigation.navigate("Login", { screen: "Login" });
        } else {
          navigation.navigate("Main", { screen: "Main" });
        }
      }
    }
  }
  
  async function checkAuthentication() {
    try {
      const perfil = await getPerfil();
      
      if(perfil != null){
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Erro ao verificar a autenticação:", error);
      setIsAuthenticated(false);
    }
  }

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      isLooping={false}
      shouldPlay
      onPlaybackStatusUpdate={onPlayBackUpdade}
      source={require("../../Assets/Video/Splashs.mp4")}
    />
  );
};

export default SplashScreen;

