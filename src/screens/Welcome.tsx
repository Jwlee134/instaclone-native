import React from "react";
import { Text, View } from "react-native";
import { WelcomeScreenProps } from "../types/navigators";

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Login")}>Welcome</Text>
    </View>
  );
};

export default Welcome;
