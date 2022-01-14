import { View, Text, StyleSheet, Pressable } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = ({
  id,
  coordinates,
  isSelected,
  price,
  setSelectedPlace,
  onPress,
}) => {
  return (
    <Pressable key={id} onPress={onPress}>
      <Marker coordinate={coordinates}>
        <View
          style={{
            ...styles.markerContainer,
            backgroundColor: isSelected ? "#FF5A60" : "white",
          }}
        >
          <Text
            style={{
              ...styles.markerText,
              color: isSelected ? "white" : "#FF5A60",
            }}
          >
            £{price}
          </Text>
        </View>
      </Marker>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  markerContainer: {
    padding: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  markerText: {
    fontWeight: "bold",
  },
});

export default CustomMarker;
