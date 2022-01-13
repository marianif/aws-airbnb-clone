import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./SearchResultStyles";
const SearchResult = ({ description }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={24} color="black" />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default SearchResult;
