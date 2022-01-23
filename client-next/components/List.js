import React, {useReducer, useState, useContext} from 'react';
import Checkbox from './Checkbox';
import EditItem from './EditItem';
import {Delete} from "./Command";
import {UpdateContext} from "./App";
import Navigation from './Nav';

export default function List({loading, error, data}) {
  const [navProp, state] = Navigation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error} </p>;

  return (
    <table class="table is-hoverable box">
      {navProp}
      <thead>
        <TableHeader />
      </thead>
      <tfoot>
        <TableHeader />
      </tfoot>
      <tbody>
        { state === "All" ? <ListAll data={data.all} /> : 
          state === "Complete" ? <ListAll data={data.all.filter(({_id, title, complete}) => complete)} /> :
          <ListAll data={data.all.filter(({_id, title, complete}) => !complete)} />
        } 
      </tbody>
    </table>
  )
}

function ListAll({data}) {
  return (
      <>
      {data.map(({_id, title, complete}) => <ListItem id={_id} title={title} complete={complete} />)}
      </>
  );
}

function TableHeader() {
  return (
    <tr>
      <th class="is-narrow">ID</th>
      <th>Todo</th>
      <th class="is-narrow">Complete/Not</th>
      <th class="is-narrow">Edit/Delete</th>
    </tr>
  )
}

function ListItem({id, title, complete}) {
  const [editMode, setEditMode] = useState(false);
  const { refetch } = useContext(UpdateContext); 
  const [deleteItem, {loading, error}] = Delete(refetch);

  function deleteMe (id) {
    deleteItem({variables: {id: id}})
  } 

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  if (editMode) {
    return <EditItem id={id} title={title} complete={complete} setEditMode={setEditMode} />;
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <Checkbox id={id} complete={complete} disabled={false}/>
      </td>
      <td>
          <div class="buttons">
            <button class="button is-small" onClick={() => setEditMode(true)}>Edit</button>
            <button class="button is-small" onClick={() => deleteMe(id)}>Delete</button>
          </div>
      </td>
    </tr>
  )
}
