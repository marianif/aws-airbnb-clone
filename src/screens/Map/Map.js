import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import MapView from "react-native-maps";
import MapPost from "../../components/MapPost/MapPost";
// import { feed } from "../../assets/data/dummy-feed";
import CustomMarker from "../../components/Marker/CustomMarker";
import { styles } from "./MapStyles";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

const initialRegion = {
  latitude: 28.3279822,
  longitude: -16.51725,
  longitudeDelta: 0.8,
  latitudeDelta: 0.8,
};

const MapScreen = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await API.graphql(graphqlOperation(listPosts));
      setPosts(response.data.listPosts.items);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        // provider={PROVIDER_GOOGLE}
      >
        {posts.map((item, index) => {
          const coordinate = {
            latitude: item.latitude,
            longitude: item.longitude,
          };
          return (
            <Pressable key={item.id} onPress={() => setSelectedPlace(item.id)}>
              <CustomMarker
                id={item.id}
                coordinates={coordinate}
                price={item.newPrice}
                selectedPlace={selectedPlace}
              />
            </Pressable>
          );
        })}
      </MapView>
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {feed.map((item) => {
          return (
            <MapPost
              key={item.id}
              title={item.title}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              finalPrice={item.finalPrice}
              bedrooms={item.bedroom}
              image={item.image}
              bed={item.bed}
            />
          );
        })}
      </ScrollView> */}
      <FlatList
        horizontal
        snapToInterval={Dimensions.get("window").width - 60}
        snapToAlignment="center"
        style={styles.carousel}
        data={posts}
        renderItem={({ item }) => {
          return (
            <MapPost
              key={item.id}
              title={item.title}
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
    </View>
  );
};

export default MapScreen;
