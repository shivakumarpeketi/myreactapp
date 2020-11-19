import React from 'react'

function StateRequirement() {
    let i = -1
    return (
        <div>
            State Requirement Testing {i}
            <button onClick={() => { console.log("increasing i value: "+ i );  i = i + 1; console.log("i Value: "+ i); return i }} >Increase</button>
        </div>
    )
}

export default StateRequirement
