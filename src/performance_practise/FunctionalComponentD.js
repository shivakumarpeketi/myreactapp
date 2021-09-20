import React, { useState, useEffect } from 'react'


function FunctionalComponentD() {
    const [countD, setCountD] = useState(1000)
    useEffect(() => {
        console.log('Rerendering Component D')
    }, [countD])
    return (
        <div>
            Component D  Count - {countD}
            <button onClick={()=> setCountD(countD + 10)}>Increase D</button>
        </div>
    )
}

export default FunctionalComponentD
