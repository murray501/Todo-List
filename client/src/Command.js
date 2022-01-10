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

export function CommandShow() {
    const {loading, error, data, refetch} = useQuery(SHOW);
    return {loading, error, data, refetch}; 
}

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    newTodo(title: $text) {
      id
      title
      complete
    }
  }
`;

export function AddTodo(refetch) {
  const [addTodo, {loading, error}] = useMutation(ADD_TODO, {
    onCompleted() {
      refetch();
    }
  });
  return [addTodo, {loading, error}];
}
