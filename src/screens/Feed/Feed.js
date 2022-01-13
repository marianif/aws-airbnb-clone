import React from "react";
import { FlatList, ScrollView } from "react-native";
import { feed } from "../../assets/images/data/dummy-feed";
import Post from "../../components/Post/Post";
import { SafeAreaView } from "react-native-safe-area-context";

const Feed = () => {
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <FlatList
        data={feed}
        renderItem={({ item, index }) => {
          return (
            <Post
              description={item.description}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              finalPrice={item.finalPrice}
              bedrooms={item.bedroom}
              image={item.image}
              bed={item.bed}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Feed;
