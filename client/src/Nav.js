import React, {useState} from 'react';

export default function Navigation() {
    const [state, setState] = useState("All");
    
    function Select({id}) {
        if (id === state) {
            return (
                <strong>{id}</strong>
            )
        } else {
            return (
                <>{id}</>
            )
        }
    }

    return ([
    <nav class="level">
        <div class="level-left"></div>
        <div class="level-right">
            <p class="level-item"><a onClick={() => setState("All")}><Select id="All" /></a></p>
            <p class="level-item"><a onClick={() => setState("Complete")}><Select id="Complete" /></a></p>
            <p class="level-item"><a onClick={() => setState("Not Complete")}><Select id="Not Complete" /></a></p>            
        </div>
    </nav>,
    state]
    );
}

