import React from 'react'

function FunctionClick() {
    function functionOnClick() {
        console.log("Function Click");
    }

    return (
        <div>
            <button onClick={functionOnClick} >Function Click</button>
        </div>
    )
}

export default FunctionClick
