import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import FeedScreen from "../screens/Feed/Feed";

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
        component={FeedScreen}
        options={{
          title: "Map",
        }}
      />
    </Tab.Navigator>
  );
};

export default SearchResultsTopTab;
