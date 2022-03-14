import AppLoading from "expo-app-loading";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./styles/theme";

const App = () => {
  const [loaded] = useFonts(Ionicons.font);
  const [assets] = useAssets([require("../assets/logo.png")]);

  if (!loaded || !assets) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <LoggedOutNav />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
