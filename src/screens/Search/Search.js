import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { styles } from "./SearchStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { searchResults } from "../../assets/data/dummy-search";
import SearchResult from "../../components/SearchResult/SearchResult";

const SearchScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar navigation={navigation} input={input} setInput={setInput} />
      {/* <FlatList
        data={searchResults}
        renderItem={({ item }) => {
          return <SearchResult description={item.description} navigation={navigation} />;
        }}
      /> */}
    </SafeAreaView>
  );
};

export default SearchScreen;
