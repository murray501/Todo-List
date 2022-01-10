import React, {useContext} from 'react';
import { useInput } from "./hooks";
import {UpdateContext} from "./App";
import {ChangeTitle} from "./Command";
import Checkbox from './Checkbox';

export default function EditItem({id, title, complete, setEditMode}) {
  const { refetch } = useContext(UpdateContext); 
  const [changeTitle, {loading, error}] = ChangeTitle(refetch);
  const [titleProps, resetTitle] = useInput(title);
  function update() {
    changeTitle({variables: {id: id, title: titleProps.value}})
    setEditMode(false);
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
        <tr>
          <td>{id}</td>
          <td><input class="input" type="text" {...titleProps} required /></td>
          <td><Checkbox id={id} complete={complete} disabled={true}/></td>
          <td><button class="button is-small" onClick={update}>Update</button></td>
        </tr>
    )
}



