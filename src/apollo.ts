import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN = "token";
export const DEFAULT_AVATAR =
  "https://instaclone-jw.s3.ap-northeast-2.amazonaws.com/avatars/1646290008674-Jwlee134-avatar.jpeg";

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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, token: tokenVar() },
}));

const uploadHttpLink = createUploadLink({
  uri: "http://192.168.0.6:4000/graphql",
});

export const cache = new InMemoryCache({
  // keyArgs false = seeFeed 쿼리에서 lastId 인자가 바뀜에 따라 쿼리가 다른 쿼리로 인식되는 걸 방지
  // merge = 인자가 바뀜에 따라 같은 쿼리에 여러 데이터가 추가될 때 기존 캐시에 새로운 캐시를 추가하도록 설정
  typePolicies: {
    Query: {
      fields: {
        seeFeed: {
          keyArgs: false,
          merge: (existing = [], incoming = []) => [...existing, ...incoming],
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(uploadHttpLink),
  cache,
});

export default client;
