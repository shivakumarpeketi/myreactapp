import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>Name: {person.name} | Age: {person.gender}</h2>
        </div>
    )
}

export default Person
