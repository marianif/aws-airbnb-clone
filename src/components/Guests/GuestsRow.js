import React from "react";
import { Pressable, View, Text } from "react-native";
import { styles } from "./GuestRowStyles";
import { Ionicons } from "@expo/vector-icons";

const GuestsRow = ({ title, count, setCount }) => {
  let description;

  const handleCount = (type) => {
    if (type === "minus" && count === 0) {
      return;
    } else if (type === "minus" && count >= 0) {
      setCount(count - 1);
    } else if (type === "plus") {
      setCount(count + 1);
    }
  };

  switch (title) {
    case "Adults":
      description = "Ages 15 or above";
      break;
    case "Children":
      description = "Ages 15 or below";
      break;
    case "Infants":
      description = "Ages 3 or below";
      break;

    default:
      break;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.helperText}>{description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => handleCount("minus")}>
          <Ionicons
            name="ios-remove-circle-outline"
            size={24}
            color="#4E4F51"
          />
        </Pressable>
        <Text style={styles.count}>{count}</Text>
        <Pressable style={styles.button} onPress={() => handleCount("plus")}>
          <Ionicons name="add-circle-outline" size={24} color="#4E4F51" />
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsRow;
