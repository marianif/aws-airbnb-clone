import React, { useRef, useEffect } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SearchResult from "../SearchResult/SearchResult";

const { height } = Dimensions.get("window");

const SearchBar = ({ input, setInput, navigation }) => {
  const _inputRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     _inputRef.current.focus();
  //   }, 500);
  // }, [_inputRef]);

  return (
    <View style={styles.searchContainer}>
      {/* <FontAwesome name="search" size={22} color="#FF5A60" /> */}
      {/* <TextInput
        style={styles.input}
        ref={_inputRef}
        value={input}
        onChangeText={(e) => setInput(e)}
        placeholder="Where would you like to go?"
      /> */}
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(
            // "DATA:" +
            //   JSON.stringify(data) +
            "DETAILS:" + JSON.stringify(details, null, 3)
          );
          navigation.navigate("Guests", {
            coordinates: details.geometry.viewport,
          });
        }}
        fetchDetails
        query={{
          key: "AIzaSyApauelrkG328Vb6IeYIP-I90WrLAM5lzY",
          language: "en",
          type: "(cities)",
        }}
        renderRow={(item) => {
          return <SearchResult description={item.description} />;
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 20,
    height: height * 0.8,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
});
