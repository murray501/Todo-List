import React, {useReducer, useContext, useState} from 'react';
import {UpdateContext} from "./App";
import {ChangeComplete} from "./Command";

export default function Checkbox({id, complete, disabled}) {
    const { refetch } = useContext(UpdateContext); 
    const [changeComplete, {loading, error}] = ChangeComplete(refetch);

    const toggle = () => {
      changeComplete({variables: {id: id, complete: !complete}})
    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
      <label class="checkbox">
        {disabled ? 
         <input type="checkbox" checked={complete} onChange={toggle} disabled/> :
         <input type="checkbox" checked={complete} onChange={toggle} />
        }
          {complete ? "complete" : "not"}
      </label>
    )
  }