import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { styles } from "./SearchStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { searchResults } from "../../assets/images/data/dummy-search";
import SearchResult from "../../components/SearchResult/SearchResult";

const Search = () => {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar input={input} setInput={setInput} />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => {
          return <SearchResult description={item.description} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Search;
