import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MapPost from "../../components/MapPost/MapPost";
import { feed } from "../../assets/data/dummy-feed";
import CustomMarker from "../../components/Marker/CustomMarker";
import { styles } from "./MapStyles";

const initialRegion = {
  latitude: 28.3279822,
  longitude: -16.51725,
  longitudeDelta: 0.8,
  latitudeDelta: 0.8,
};

const MapScreen = () => {
  const [selectedPlace, setSelectedPlace] = useState("2");
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        // provider={PROVIDER_GOOGLE}
      >
        {feed.map((item, index) => {
          return (
            <CustomMarker
              key={item.id}
              id={item.id}
              coordinates={item.coordinate}
              price={item.totalPrice}
              isSelected={item.id === selectedPlace}
              onPress={() => setSelectedPlace(item.id)}
            />
          );
        })}
      </MapView>
      <ScrollView
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
      </ScrollView>
    </View>
  );
};

export default MapScreen;
