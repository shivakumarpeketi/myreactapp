import React, {  useEffect, useState } from 'react'

function FunctionalComponentA() {
    const [countA, setCountA] = useState(10)
    useEffect(() => {
        console.log('Rerendering Component A')
    }, [countA])
    return (
        <div>
            Component A Count - {countA}
            <button onClick={()=> setCountA(countA+ 10)}>Increase A</button>
        </div>
    )
}

export default FunctionalComponentA
