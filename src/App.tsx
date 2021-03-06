import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme, navigationTheme } from "./styles/theme";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { cache, isLoggedInVar, TOKEN, tokenVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [loaded] = useFonts(Ionicons.font);
  const [assets] = useAssets([require("./assets/logo.png")]);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem(TOKEN);
      if (token) {
        isLoggedInVar(true);
        tokenVar(token);
      }
      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });
      setIsReady(true);
    })();
  }, []);

  if (!loaded || !assets || !isReady) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
          {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
