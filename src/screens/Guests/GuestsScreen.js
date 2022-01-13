import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GuestsScreenStyles, styles } from "./GuestsScreenStyles";
import GuestsRow from "../../components/Guests/GuestsRow";

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <GuestsRow count={adults} setCount={setAdults} title="Adults" />
      <GuestsRow count={children} setCount={setChildren} title="Children" />
      <GuestsRow count={infants} setCount={setInfants} title="Infants" />
    </SafeAreaView>
  );
};

export default GuestsScreen;
