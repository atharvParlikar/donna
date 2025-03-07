"use client";

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8000/graphql",
    fetchOptions: { cache: "no-store" },
  }),
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}> {children} </ApolloProvider>;
}

export default client;
