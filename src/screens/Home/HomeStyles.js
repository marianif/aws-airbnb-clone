import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titleContainer: {
    width: "90%",

    marginTop: height / 10,
    alignSelf: "center",
  },
  title: {
    fontSize: width / 7,
    fontWeight: "bold",
    color: "white",
    width: "100%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    width: width / 3,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
  searchContainer: {
    paddingVertical: 40,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  searchButton: {
    backgroundColor: "white",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: "25%",
    alignItems: "center",
    height: height / 18,
    borderRadius: 100,
  },
  searchButtonText: {
    fontWeight: "bold",
  },
});
