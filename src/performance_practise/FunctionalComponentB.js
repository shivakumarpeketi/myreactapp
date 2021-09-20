import React, {  useEffect, useState } from 'react'

function FunctionalComponentB() {
    const [countB, setCountB] = useState(100)
    useEffect(() => {
        console.log('Rerendering Component B')
    }, [countB])
    return (
        <div>
            Component B Count- {countB}
            <button onClick={()=> setCountB(countB + 10)}>Increase B</button>
        </div>
    )
}

export default FunctionalComponentB
