import React from 'react';
import { useInput } from "./hooks";

export default function AddItem({addTodo, loading, error}) {
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