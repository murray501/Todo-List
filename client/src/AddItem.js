import React, {useState} from 'react';
import { useInput } from "./hooks";
import { gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    newTodo(title: $text) {
      id
      title
      complete
    }
  }
`;

export default function AddItem({update}) {
  const [addTodo, {data, loading, error }] = useMutation(ADD_TODO);
  const [titleProps, resetTitle] = useInput("");
  const submit = e => {
    e.preventDefault();
    addTodo({variables: {text: titleProps.value }});
    resetTitle();
    update();
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={submit} class="box">
      <div class="field">
        <label class="label">Add Todo</label>
        <input class="input" type="text" {...titleProps} placeholder="todo" required />
      </div>
      <div class="field">
          <button class="button is-success">
            Add
          </button>
      </div>
    </form>
  )
}