import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Card = ({ plant }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: {plant.common_name}</Text> 
      {/* <Image source={plant.default_image.large_url || "none"} style={styles.image} /> */}
      <Text style={styles.watering}>Watering: {plant.watering}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100, // Set a definite height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  name: {
    color: "black",
  },
  watering: {
    color: "black",
  },
});

export default Card
