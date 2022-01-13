import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./SearchResultStyles";
const SearchResult = ({ description, navigation }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Guests")}
    >
      <Ionicons name="location" size={24} color="black" />
      <Text style={styles.text}>{description}</Text>
    </Pressable>
  );
};

export default SearchResult;
