import React from "react";
import { Auth } from "aws-amplify";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ProfileStyles";

const ProfileScreen = () => {
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signOut} onPress={signOut}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
