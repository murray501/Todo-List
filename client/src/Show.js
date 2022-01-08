import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

const SHOWTOTAL = gql`
query ExampleQuery {
  total
  all {
    id
    title
    complete
  }
}
`
export default function Show() {
  const { loading, error, data } = useQuery(SHOWTOTAL);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <>
    <div>{data.total}</div>
    {data.all.map(({id, title, complete}) => (
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{complete ? 'true' : 'false'}</p>
      </div>
    ))}
    </>
  )
}