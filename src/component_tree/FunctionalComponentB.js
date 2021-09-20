import React, { useContext, useEffect } from 'react'
import FunctionalComponentD from './FunctionalComponentD'
import { CountContext } from './ParentComponent'

function FunctionalComponentB() {

    const countContext = useContext(CountContext)
    // useEffect(() => {
    //     console.log('Rendering Component B')
    // }, [])

    useEffect(() => {
        console.log('Rerendering Component B')
    }, [countContext.countState])
    return (
        <div>
           <FunctionalComponentD /> 
        </div>
    )
}

export default FunctionalComponentB
