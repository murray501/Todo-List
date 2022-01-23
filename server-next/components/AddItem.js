import React, { useContext } from 'react';
import { useInput } from "./hooks";
import {UpdateContext} from "./App";
import {AddTodo} from "./Command";

export default function AddItem() {
  const { refetch } = useContext(UpdateContext);  
  const [addTodo, {loading, error}] = AddTodo(refetch);

  const [titleProps, resetTitle] = useInput("");
  const submit = e => {
    e.preventDefault();
    addTodo({variables: {text: titleProps.value }});
    resetTitle();
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