import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./src/navigation/Navigator";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <SafeAreaProvider>
      <StackNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default withAuthenticator(App);
