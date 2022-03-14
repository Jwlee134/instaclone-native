import AppLoading from "expo-app-loading";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useAssets } from "expo-asset";

const App = () => {
  const [loaded] = useFonts(Ionicons.font);
  const [assets] = useAssets([require("../assets/logo.png")]);

  if (!loaded || !assets) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <Text>Haha</Text>
    </SafeAreaView>
  );
};

export default App;
