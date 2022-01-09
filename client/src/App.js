import React, {createContext, useState} from 'react';
import List from './List';
import AddItem from './AddItem';

import {
  useQuery,
  useMutation,
  gql
} from "@apollo/client";

const SHOW = gql`
query ShowQuery {
  total
  all {
    id
    title
    complete
  }
}
`
const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    newTodo(title: $text) {
      id
      title
      complete
    }
  }
`;

function App() {
  const {loading, error, data, refetch} = useQuery(SHOW);
  const [addTodo, {loading2, error2 }] = useMutation(ADD_TODO, {
    onCompleted() {
      refetch();
    }
  });

  return (
      <>
      <AddItem addTodo={addTodo} loading={loading2} error={error2} />
      <List loading={loading} error={error} data={data}/>
      </>
  );
}

export default App;
