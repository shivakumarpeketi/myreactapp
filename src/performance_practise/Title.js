import React from 'react'

function Title() {
    console.log(`Rendering Title Component `)
    return (
        <div>
            <h2>Employee Details:</h2>
        </div>
    )
}

export default React.memo(Title)
