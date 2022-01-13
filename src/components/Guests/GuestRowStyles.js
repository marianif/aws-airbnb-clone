import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  helperText: {
    fontSize: 15,
    color: "#8B8C8E",
  },
  buttonsContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    flexDirection: "row",
  },
  button: {
    borderRadius: 100,
  },
  count: {
    fontSize: 20,
    color: "#00110B",
  },
});
