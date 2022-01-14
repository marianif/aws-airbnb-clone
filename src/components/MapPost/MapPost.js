import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");
const MapPost = ({
  image,
  oldPrice,
  newPrice,
  finalPrice,
  bedrooms,
  bed,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.bedrooms}>
            {bed} Bed / {bedrooms} Bedrooms
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {title}
          </Text>

          <Text style={styles.newPrice}>£{newPrice} / Night</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height / 8,
    marginRight: 2,
    marginHorizontal: 5,
  },
  innerContainer: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "blue",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },
  infoContainer: {
    flex: 2,
    padding: 5,
    height: "100%",
  },
  bedrooms: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B3BABD",
    marginTop: 5,
  },

  newPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MapPost;
