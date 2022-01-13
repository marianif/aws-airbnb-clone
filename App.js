import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GuestsScreen from "./src/screens/Guests/GuestsScreen";
import StackNavigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <StackNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
