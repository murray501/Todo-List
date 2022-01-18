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

const CHANGE_COMPLETE = gql`
  mutation ChangeComplete($id: ID!, $complete: Boolean!) {
    changeComplete(id: $id, complete: $complete) {
      id
      title
      complete
    }
  }
`;

export function ChangeComplete(refetch) {
  const [changeComplete, {loading, error}] = useMutation(CHANGE_COMPLETE, {
    onCompleted() {
      refetch();
    }
  });
  return [changeComplete, {loading, error}];
}

const CHANGE_TITLE = gql`
  mutation ChangeTitle($id: ID!, $title: String!) {
    changeTitle(id: $id, title: $title) {
      id
      title
      complete
    }
  }
`;

export function ChangeTitle(refetch) {
  const [changeTitle, {loading, error}] = useMutation(CHANGE_TITLE, {
    onCompleted() {
      refetch();
    }
  });
  return [changeTitle, {loading, error}];
}

const DELETE = gql`
  mutation Delete($id: ID!) {
    delete(id: $id) 
  }
`;

export function Delete(refetch) {
  const [deleteItem, {loading, error}] = useMutation(DELETE, {
    onCompleted() {
      refetch();
    }
  });
  return [deleteItem, {loading, error}];
}