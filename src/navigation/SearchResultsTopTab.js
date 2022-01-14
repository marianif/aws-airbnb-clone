import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import FeedScreen from "../screens/Feed/Feed";
import MapScreen from "../screens/Map/Map";

const Tab = createMaterialTopTabNavigator();
const SearchResultsTopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SearchResults"
        component={FeedScreen}
        options={{
          title: "List",
        }}
      />
      <Tab.Screen
        name="MapView"
        component={MapScreen}
        options={{
          title: "Map",
        }}
      />
    </Tab.Navigator>
  );
};

export default SearchResultsTopTab;
