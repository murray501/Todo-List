import React, {useReducer} from 'react';

export default function Checkbox({complete}) {
    const [checked, toggle] = useReducer(checked => !checked, complete);
    return (
      <label class="checkbox">
        <input type="checkbox" checked={checked} onChange={toggle} />
          {checked ? "complete" : "not"}
      </label>
    )
  }