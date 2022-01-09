import { useState } from "react";

export function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
}

export function Checkbox(initialValue) {
    const [checked, toggle] = useReducer(checked => !checked, initialValue);
    return (
        <input type="checkbox" value={checked} onChange={toggle} />
    )
}