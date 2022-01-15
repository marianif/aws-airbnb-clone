import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./GuestsScreenStyles";
import GuestsRow from "../../components/Guests/GuestsRow";

const GuestsScreen = ({ navigation, route }) => {
  const { coordinates } = route.params;
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rows}>
        <GuestsRow count={adults} setCount={setAdults} title="Adults" />
        <GuestsRow count={children} setCount={setChildren} title="Children" />
        <GuestsRow count={infants} setCount={setInfants} title="Infants" />
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Results", {
            guests: children + adults,
            coordinates,
          })
        }
      >
        <Text style={styles.search}>Search</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default GuestsScreen;
