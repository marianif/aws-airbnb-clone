import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./HomeStyles";
import { FontAwesome } from "@expo/vector-icons";

const image_uri =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground source={{ uri: image_uri }} style={styles.image}>
          <View style={styles.searchContainer}>
            <Pressable
              style={styles.searchButton}
              onPress={() => console.log("search button clicked")}
            >
              <FontAwesome name="search" size={24} color="#FF5A60" />
              <Text style={styles.buttonText}>Find new places</Text>
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>New Adventures</Text>
            <Pressable
              style={styles.button}
              onPress={() => console.log("button clicked")}
            >
              <Text style={styles.buttonText}>Explore Nearby</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
