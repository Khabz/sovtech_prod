import { ApolloClient, InMemoryCache } from "@apollo/client";

const { REACT_APP_API_URL } = process.env;

export const apolloClient = new ApolloClient({
   uri: "https://starwarsgraphqlserver.herokuapp.com/graphql",
   cache: new InMemoryCache(),
})