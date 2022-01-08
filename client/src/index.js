import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Show from './Show';

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

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <Show />
  </ApolloProvider>,
  document.getElementById('root')
);
