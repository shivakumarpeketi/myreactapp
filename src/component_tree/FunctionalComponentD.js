import React, { useContext, useEffect } from 'react'
import { CountContext } from './ParentComponent'


function FunctionalComponentD() {
    const countContext = useContext(CountContext)
    // useEffect(() => {
    //     console.log('Rendering Component D')
    // }, [])

    useEffect(() => {
        console.log('Rerendering Component D')
    }, [countContext.countState])

    return (
        <div>
            Component D -  {countContext.countState} 
            <button onClick={() => countContext.countDispatch("increase")}>Increase</button>
            <button onClick={() => countContext.countDispatch("decrease")}>Decrease</button>
            <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
        </div>
    )
}

export default FunctionalComponentD
