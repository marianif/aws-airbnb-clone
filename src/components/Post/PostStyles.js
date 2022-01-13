import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedrooms: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B3BABD",
    marginTop: 5,
  },
  description: {
    paddingVertical: 5,
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  prices: {
    width: "80%",
    maxWidth: "80%",
    flexDirection: "row",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#B3BABD",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 16,
  },
  newPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
  finalPrice: {
    textDecorationLine: "underline",
    fontSize: 18,
    marginRight: 5,
  },
});
