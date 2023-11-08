import React, { useEffect, useState } from "react";
import LoginPage from "../Pages/Login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../Components/TabNavigator/Nav";
import AvaliationPage from "../Pages/Avaliation/Avaliation";
import { createStackNavigator } from "@react-navigation/stack";
import Playlists from "../Pages/PlayList/Playlists";
import SearchPage from "../Pages/Search/Search";
import UserProfile from "../Pages/UserProfile/UserProfilePage";
import Info from "../Components/Profile/ProfileItem/Info";
import AppBar from "../Components/TabNavigator/AppBar";
import Artigo from "../Pages/Artigo/Artigo";
import SplashScreen from "../Pages/SplashScreen/SplashScreen";
import Artista from "../Pages/Artista/Artista";
import Album from "../Pages/Album/Album";
import AlbumBar from "../Components/TabNavigator/AlbumBar";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={({ navigation, route }) => ({
            header: () => <AppBar navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Avaliation"
          component={AvaliationPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Playlist"
          component={Playlists}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Artigo"
          component={Artigo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Artista"
          component={Artista}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Album"
          component={Album}
          options={({ navigation, route }) => ({
            header: () => <AlbumBar navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
