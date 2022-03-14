import AppLoading from "expo-app-loading";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./navigators/LoggedOutNav";

const App = () => {
  const [loaded] = useFonts(Ionicons.font);
  const [assets] = useAssets([require("../assets/logo.png")]);

  if (!loaded || !assets) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
};

export default App;
