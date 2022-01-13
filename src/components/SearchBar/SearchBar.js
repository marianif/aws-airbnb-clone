import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ input, setInput }) => {
  const _inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      _inputRef.current.focus();
    }, 500);
  }, [_inputRef]);

  return (
    <View style={styles.searchContainer}>
      <FontAwesome name="search" size={22} color="#FF5A60" />
      <TextInput
        style={styles.input}
        ref={_inputRef}
        value={input}
        onChangeText={(e) => setInput(e)}
        placeholder="Where would you like to go?"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
});
