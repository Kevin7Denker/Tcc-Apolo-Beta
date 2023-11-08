import React from "react";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import HomePage from "../../Pages/Home/HomePage";
import { Dimensions, View } from "react-native";
import FeedPage from "../../Pages/Feed/Feed";
import News from "../../Pages/News/News";



const { width: wWidth, height: hHeight } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "rgb(20,20,20)",
          height: hHeight * 0.065,
          position: "absolute",
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: { paddingBottom: 5, paddingTop: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          headerShown: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-home" size={22} color="white" />
            ) : (
              <Ionicons name="ios-home" size={22} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedPage}
        options={{
          tabBarLabel: "Feed",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 30,
                  backgroundColor: "#7b2cbf",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: 35,
                }}
              >
                <AntDesign name="heart" size={22} color="white" />
              </View>
            ) : (
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 30,
                  backgroundColor: "#5a189a",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: 35,
                }}
              >
                <AntDesign name="heart" size={22} color="white" />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "News",
          headerShown: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="newspaper-o" size={24} color="white" />
            ) : (
              <FontAwesome name="newspaper-o" size={24} color="grey" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
