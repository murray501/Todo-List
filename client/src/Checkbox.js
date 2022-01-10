import React, {useReducer, useContext} from 'react';
import {UpdateContext} from "./App";
import {ChangeComplete} from "./Command";

export default function Checkbox({id, complete, disabled}) {
    const { refetch } = useContext(UpdateContext); 
    const [changeComplete, {loading, error}] = ChangeComplete(refetch);
    const [checked, toggle] = useReducer(checked => {
      const newValue = !checked;
      changeComplete({variables: {id: id, complete: newValue}})
      return newValue;
    }, complete);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <label class="checkbox">
        {disabled ? 
         <input type="checkbox" checked={checked} onChange={toggle} disabled/> :
         <input type="checkbox" checked={checked} onChange={toggle} />
        }
          {checked ? "complete" : "not"}
      </label>
    )
  }