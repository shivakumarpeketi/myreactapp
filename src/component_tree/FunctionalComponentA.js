import React, { useContext, useEffect } from 'react'
import { CountContext } from './ParentComponent'

function FunctionalComponentA() {
    const countContext = useContext(CountContext)
    useEffect(() => {
        console.log('Rerendering Component A')
    }, [countContext.countState])
    return (
        <div>
            
            Component A - {countContext.countState}
            <button onClick={() => countContext.countDispatch("increase")}>Increase</button>
            <button onClick={() => countContext.countDispatch("decrease")}>Decrease</button>
            <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
        </div>
    )
}

export default FunctionalComponentA
