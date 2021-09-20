import React from 'react'

function DynamicComponent({label, data}) {
    console.log(`Dynamic ${label} Component`)
    return (
        <div>
            Dynamic Component: {label} - {data}
        </div>
    )
}

export default DynamicComponent
