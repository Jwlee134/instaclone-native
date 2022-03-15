import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.0.6:4000/graphql",
  cache: new InMemoryCache(),
});

export const isLoggedInVar = makeVar(false);
export const logUserIn = (token: string) => {
  console.log(token);
  isLoggedInVar(true);
};

export default client;
