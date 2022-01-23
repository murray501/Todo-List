import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../components/App';
import "bulma/css/bulma.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

export default function Index() {
    return (
        <ApolloProvider client={client}>
        <section class="section">
          <div class="container">
            <App />
          </div>
        </section>
      </ApolloProvider>
    )
}