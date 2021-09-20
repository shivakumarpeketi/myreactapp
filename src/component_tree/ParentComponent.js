import React, { useEffect, useReducer, useState } from 'react'
import FunctionalComponentA from './FunctionalComponentA';
import FunctionalComponentB from './FunctionalComponentB'

const initialCount = 0;
// const actions = ["increase", "decrease", "reset"]
const reducerFunction = (count, action) => {
    switch (action) {
        case "increase":
            return count + 1;
        case "decrease":
            return count - 1;
        case "reset":
            return initialCount;
        default:
            return count;
    }
}

export const CountContext = React.createContext();

function ParentComponent() {
    const [countState, dispatch] = useReducer(reducerFunction, initialCount)
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Rendering Parent Component')
    }, [countState, count])

    return (
        <CountContext.Provider value={{ countState: countState, countDispatch: dispatch }} >
            <div>
                <h2> Count {countState}</h2>
                Parent Component click count {count}
                <FunctionalComponentA />
                <FunctionalComponentB />
                {/* <FunctionalComponentC /> */}
                <button onClick={()=> setCount(count + 1)}>Click Me</button>
            </div>
        </CountContext.Provider>
    )
}

export default ParentComponent
