import React, {useReducer, useEffect, useContext} from 'react';
import {UpdateContext} from './App';
import {
  useQuery,
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
export default function List() {
  console.log("list is called");
  const {loading, error, data} = useQuery(SHOW);

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
      <th>ID</th>
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

function Checkbox({complete}) {
  const [checked, toggle] = useReducer(checked => !checked, complete);
  return (
    <label class="checkbox">
      <input type="checkbox" checked={checked} onChange={toggle} />
        {checked ? "complete" : "not"}
    </label>
  )
}