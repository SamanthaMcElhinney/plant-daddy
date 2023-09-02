import React from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Card from "./Card"; // assuming it's in the same directory

const SwiperComponent = () => {
  // This array could later come from an API
  const images = [
    require("../images/plantiful.png"),
    require("../images/plantiful.png"),
    require("../images/plantiful.png"),
  ];

  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={styles.dotStyle}
      activeDotColor="#FFF"
      activeDotStyle={styles.activeDotStyle}
    >
      {images.map((image, index) => (
        <Card key={index} imageSource={image} />
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  dotStyle: {
    marginTop: -200,
    width: 15,
    height: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  activeDotStyle: {
    marginTop: -200,
    width: 30,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#FFF",
    activeDotColor: "#FFF",
  },
});

export default SwiperComponent;
