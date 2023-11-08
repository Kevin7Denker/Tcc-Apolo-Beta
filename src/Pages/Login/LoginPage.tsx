import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { storeData } from "../../Repository/Storage";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../Api/Spotify/redux/slice/user";
import { styles } from "./Styles/Styles";
import { CLIENT_ID, CLIENT_SECRET } from "../../Api/Spotify/Data/Config";
import { Video, ResizeMode } from "expo-av";

const LoginPage = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState<any>([]);
  const dispatch = useDispatch<any>();

  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  function Login() {
    promptAsync();
  }

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
        "user-follow-read",
      ],
      usePKCE: false,
      redirectUri: "exp://pvjuong.kv.denker.8081.exp.direct/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      storeData("@access_token", access_token);
      dispatch(getCurrentUser());
      navigation.navigate("Main", { screen: "Main" });
    }
  }, [response]);

  return (
    <View style={styles.view}>
      <Video
        style={styles.backgroundVideo}
        ref={video}
        source={require("../../Assets/Video/F.webm")}
        shouldPlay
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../Assets/Banner/Image/Logo.png')}
        />
        <Text style={styles.welcome}>Bem Vindo</Text>
        <TouchableOpacity onPress={() => Login()}>
          <View style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.att}>© Denker and  © Kotzias</Text>
      </View> 
    </View>
  );
};

export default LoginPage;
