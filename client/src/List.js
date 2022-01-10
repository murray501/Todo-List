import React, {useReducer} from 'react';
import Checkbox from './Checkbox';

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
      <th class="is-narrow">ID  </th>
      <th>Todo</th>
      <th class="is-narrow">
        <p>complete/not</p>
      </th>
    </tr>
  )
}

function ListItem({id, title, complete}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <Checkbox complete={complete}/>
      </td>
    </tr>
  )
}

