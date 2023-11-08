import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Dimensions, StyleSheet } from "react-native";

const { width: wWidth, height: hHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(20,20,20)",
    paddingTop: 40,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    zIndex: 1,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const AlbumBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <Ionicons
          style={styles.icon}
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
      </View>
    </View>
  );
};

export default AlbumBar;
