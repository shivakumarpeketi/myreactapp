import React, { useState } from 'react'

function StateRequirement() {
    let i = -1
    const [temp, setTemp] = useState(0)
    return (
        <div>
           <h2> State Requirement Testing {i} and {temp}</h2>
            <div>
                <button onClick={() => { console.log("increasing i value: " + i); i = i + 1; console.log("i Value: " + i); return i }} >Increase</button>
                <button onClick={() => { console.log("increasing temp value: " + temp); setTemp(temp + 2); console.log("New temp Value: " + temp); }} >Increase Temp</button>
            </div>
        </div>
    )
}

export default StateRequirement
