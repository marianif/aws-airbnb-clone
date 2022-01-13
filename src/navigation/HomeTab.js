import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Airbnb") {
            iconName = focused ? "airbnb" : "airbnb";
          } else if (route.name === "Messages") {
            iconName = focused ? "comment" : "comment";
          } else if (route.name === "Profile") {
            iconName = focused ? "user-circle" : "user-circle";
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF5A60",
        tabBarInactiveTintColor: "#A1A1A1",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Explore",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTab;
