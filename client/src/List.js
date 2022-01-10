import React, {useReducer, useState} from 'react';
import Checkbox from './Checkbox';
import EditItem from './EditItem';

export default function List({loading, error, data}) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <table class="table is-hoverable box">
      <thead>
        <TableHeader />
      </thead>
      <tfoot>
        <TableHeader />
      </tfoot>
      <tbody>
        {data.all.map(({id, title, complete}) => <ListItem id={id} title={title} complete={complete} />)}
      </tbody>
    </table>
  )
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
            <button class="button is-small" onClick={deleteItem}>Delete</button>
          </div>
      </td>
    </tr>
  )
}

function deleteItem() {
  console.log("delete item")
}