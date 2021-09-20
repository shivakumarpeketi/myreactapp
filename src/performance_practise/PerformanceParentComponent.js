import React, { useEffect,  useState } from 'react'
import FunctionalComponentA from './FunctionalComponentA'
import FunctionalComponentB from './FunctionalComponentB'
import FunctionalComponentD from './FunctionalComponentD'



function PerformanceParentComponent() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Rendering Parent Component')
    },[count])

    return (
            <div>
                Parent Component click count {count}
                <FunctionalComponentA />
                <FunctionalComponentB />
                <FunctionalComponentD />
                <button onClick={()=> setCount(count + 1)}>Click Me</button>
            </div>
    )
}

export default PerformanceParentComponent
