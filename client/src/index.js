import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

ReactDOM.render(
  <ApolloProvider client={client}>
    <section class="section">
      <div class="container">
        <App />
      </div>
    </section>
  </ApolloProvider>,
  document.getElementById('root')
);

