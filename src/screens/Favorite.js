import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { getPlants, getIndoorPlants } from "../../apiCalls";
import Card from "../components/Card";


const Favorite = () => {
  const [plants, setPlants] = useState([]);
  const [indoorPlants, setIndoorPlants] = useState([])
  
  useEffect(()=> {
    getIndoorPlants()
    .then((data)=> {
      setIndoorPlants(data.data)
    })
    .catch((error)=> {
      console.log("Error fetching indoor plants:", error)
    })
  },[])
  
  // useEffect(() => {
  //   getPlants()
  //     .then((data) => {
  //       setPlants(data.data); 
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching plants:", error);
  //     });
  // }, []);
  //   console.log(indoorPlants, "line 32 indoor plants")
  return (
    <View>
      <LinearGradient
        colors={["#FFF", "#e0e4d3"]}
        style={styles.searchContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor="#799F7A"
          style={styles.searchInput}
        />
        <FontAwesome name="search" size={18} color="#799F7A" />
      </LinearGradient>
      <View style={styles.container}>
        {indoorPlants.map((plant) => (
          <Card key={plant.id} plant={plant} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    fontWeight: "bold",
    fontSize: 18,
    width: 260,
  },
});

export default Favorite;
