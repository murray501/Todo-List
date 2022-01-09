import React, {createContext, useState} from 'react';
import List from './List';
import AddItem from './AddItem';

function App() {
  const [state,setState] = useState(false);
  const update = () => {
    setState(!state);
  }

  return (
      <>
      <AddItem update={update}/>
      <List />
      </>
  );
}

export default App;
