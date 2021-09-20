import React from 'react'

function ActionComponent({actionFunction, children}) {
    console.log(`Action  ${children} Component`)
    return (
        <div>
            Action Component <button onClick={actionFunction}>{children}</button>
        </div>
    )
}

export default ActionComponent
