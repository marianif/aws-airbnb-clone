import React, { useEffect, useState } from "react";
import { FlatList, Pressable, ScrollView } from "react-native";
// import { feed } from "../../assets/data/dummy-feed";
import Post from "../../components/Post/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

const FeedScreen = ({ navigation, route }) => {
  const { guests, coordinates } = route.params;
  console.log(coordinates);
  const [feed, setFeed] = useState([]);
  const getPostsList = async () => {
    const { southwest, northeast } = coordinates;
    const response = await API.graphql(
      graphqlOperation(listPosts, {
        filter: {
          and: {
            maxGuests: {
              ge: guests,
            },
            latitude: {
              between: [southwest.lat, northeast.lat],
            },
            longitude: {
              between: [southwest.lng, northeast.lng],
            },
          },
        },
      })
    );
    console.log(response.data.listPosts.items);
    setFeed(response.data.listPosts.items);
  };

  useEffect(() => {
    getPostsList();
  }, []);
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

export default FeedScreen;
