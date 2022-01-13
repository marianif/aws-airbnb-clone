import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import FeedScreen from "../screens/Feed/Feed";
import SearchResultsTopTab from "./SearchResultsTopTab";
const Stack = createStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SearchResultsTab"
        component={SearchResultsTopTab}
        options={{
          title: "Results",
        }}
      />
    </Stack.Navigator>
  );
}

export default ExploreStack;
