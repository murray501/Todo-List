import React, {createContext} from 'react';
import List from './List';
import AddItem from './AddItem';
import { CommandShow } from './Command';

export const UpdateContext = createContext();

export function App() {
  const {loading, error, data, refetch} = CommandShow();

  return (
      <UpdateContext.Provider value={{refetch}}>
        <AddItem />
        <List loading={loading} error={error} data={data}/>
      </UpdateContext.Provider>
  );
}

