import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN = "token";

export const isLoggedInVar = makeVar(false);
export const logUserIn = async (token: string) => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};
export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar("");
};

export const tokenVar = makeVar("");

const httpLink = createHttpLink({
  uri: "http://192.168.0.6:4000/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, token: tokenVar() },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
