import AppLoading from "expo-app-loading";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts(Ionicons.font);

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <Text>Haha</Text>
    </SafeAreaView>
  );
};

export default App;
