import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Camera} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import {shareAsync} from'expo-sharing'
import { useEffect, useRef, useState } from "react";

const Home = ({ navigation }) => {
  let cameraRef = useRef()
  const [hasCameraPermissions, setHasCameraPermissions] = useState()
  const[hasMediaLibraryPermissions, setHasMediaLibraryPermissions] = useState()
  let photo
  let takePic = async() => {
    let options = {
      quality:1,
      base64: true,
      exif:false,
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options)
  }

  useEffect(()=> {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync()
      const hasMediaLibraryPermissions = await MediaLibrary.requestPermissionsAsync()
      setHasCameraPermissions(cameraPermission.status === 'granted')
      setHasMediaLibraryPermissions(hasMediaLibraryPermissions.status === 'granted')
    })()
  }, [])

  if(hasCameraPermissions === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if(!hasCameraPermissions) {
    return <Text>Permission for camera not granted. Please change this in settings</Text>
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../images/plantiful.png")}
          style={styles.logoImage}
        />
      </View>
      <LinearGradient
        colors={["#FFF", "#e0e4d3"]}
        style={styles.gradientStyle}
      />
      <View style={styles.welcomeContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.welcomeText}>Welcome Plant Daddy🌿</Text>
          <Text style={styles.welcomeText2}>Here are your children:</Text>
        </View>
      </View>
      <Camera style={styles.cameraContainer} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title="Take Pic" onPress={takePic}>

          </Button>

        </View>
        <StatusBar style="auto"/>
      </Camera>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScrollView}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/snake.jpg")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Snake Plant</Text>
            <Text style={styles.personName}>Samuel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/pothos.jpg")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Pothos</Text>
            <Text style={styles.personName}>Patty</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/fern.jpg")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Fern</Text>
            <Text style={styles.personName}>Fernnie Sanders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/cactus.jpg")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Cactus</Text>
            <Text style={styles.personName}>Prickly Tim</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/fiddleLeaf.jpg")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Fiddle Leaf</Text>
            <Text style={styles.personName}>Freddy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/watermellon.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Watermelon Peperomia</Text>
            <Text style={styles.personName}>Wilson</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={styles.card}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/golden.jpg")}
              style={styles.imageStyle}
            />
            <Text style={styles.plantName}>Neon Pothos </Text>
            <Text style={styles.personName}>Nelly</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bottomScrollView}
      ></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  buttonContainer:{
    alignSelf:'flex-end'
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e4d3",
    height: "28%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  logoImage: {
    height: 160,
    width: 200,
    marginTop: 30,
  },
  gradientStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 800,
    marginTop: 300,
    top: 0,
  },
  welcomeContainer: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  leftContainer: {
    width: "100%",
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#585a61",
  },
  welcomeText2: {
    marginTop:2,
    fontWeight: "thin",
    fontSize: 17,
    color: "#799F7A",
  },
  horizontalScrollView: {
    height: 400,
  },
  card: {
    height: 250,
    elevation: 2,
    backgroundColor: "#FFF",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 160,
  },
  container: {
    position: "relative",
    width: 150,
    height: 150,
  },
  imageStyle: {
    marginTop: 60,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  plantName: {
    position: "absolute",
    top: 10,
    left: 10,
    fontWeight: "bold",
    marginBottom:5,
  },
  personName: {
    position: "absolute",
    top: 30,
    left: 10,
    fontWeight: "bold",
    color: "#799F7A",
    marginTop: 5,
  },
  bottomScrollView: {
    marginBottom: -100,
    backgroundColor: "#799F7A",
  },
});

export default Home;
