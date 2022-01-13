import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./PostStyles";

const image_url =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Post = ({
  image,
  oldPrice,
  newPrice,
  finalPrice,
  bedrooms,
  bed,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.bedrooms}>
        {bed} Bed / {bedrooms} Bedrooms
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
      <View style={styles.priceContainer}>
        <View style={styles.prices}>
          <Text style={styles.oldPrice}>£{oldPrice}</Text>
          <Text style={styles.newPrice}>£{newPrice} / Night</Text>
        </View>
        <Text style={styles.finalPrice}>{finalPrice}</Text>
      </View>
    </View>
  );
};

export default Post;
