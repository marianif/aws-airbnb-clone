import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTab from "./HomeTab";
import SearchScreen from "../screens/Search/Search";
import FeedScreen from "../screens/Feed/Feed";
import GuestsScreen from "../screens/Guests/GuestsScreen";
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#fff",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

function StackNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
          }}
        />
        <Stack.Screen name="Results" component={FeedScreen} />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: "How Many Guests?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
