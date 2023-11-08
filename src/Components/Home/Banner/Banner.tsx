import React from "react";
import { Dimensions, Text, View, Image, Pressable } from "react-native";

const Banner = () => {
  const { width: wWidth, height: hHeight } = Dimensions.get("window");

  return (
    <Pressable>
    <View style={{marginTop:15, marginBottom: 15}}>
      <Image
        style={{ borderRadius: 15, width: wWidth * 0.9, height: hHeight * 0.16 }}
        source={require("../../../Assets/Banner/Image/Banner.png")}
      />
    </View>
    </Pressable>
  );
};

export default Banner;
