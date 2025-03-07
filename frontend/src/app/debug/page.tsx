"use client";

import { useQuery, gql } from "@apollo/client";

const GET_HELLO = gql`
query {
  hello
}
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.hello}</h1>;
}
