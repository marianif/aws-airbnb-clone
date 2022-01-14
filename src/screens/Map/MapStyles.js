import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: width,
    height: height,
  },
  carousel: {
    height: height / 8,
    position: "absolute",
    bottom: 8,
  },
});
