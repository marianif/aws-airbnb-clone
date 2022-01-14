import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GuestsScreen from "./src/screens/Guests/GuestsScreen";
import StackNavigator from "./src/navigation/Navigator";
import MapScreen from "./src/screens/Map/Map";
import MapPost from "./src/components/MapPost/MapPost";
import { feed } from "./src/assets/data/dummy-feed";

export default function App() {
  return (
    <SafeAreaProvider>
      <MapScreen />
      {/* {feed.map((item) => {
        return (
          <MapPost
            description={item.description}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            finalPrice={item.finalPrice}
            bedrooms={item.bedroom}
            image={item.image}
            bed={item.bed}
          />
        );
      })} */}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
