import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN = "token";

const client = new ApolloClient({
  uri: "http://192.168.0.6:4000/graphql",
  cache: new InMemoryCache(),
});

export const isLoggedInVar = makeVar(false);
export const logUserIn = async (token: string) => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export default client;
