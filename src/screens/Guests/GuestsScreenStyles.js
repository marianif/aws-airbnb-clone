import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#FF5A60",
    alignItems: "center",
    height: height / 15,
    justifyContent: "center",
    borderRadius: 10,
  },
  search: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
