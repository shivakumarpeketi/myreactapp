import React from 'react'

 const GreetWithDestructure = (props) => {
    const {userName, userAliasName} = props
    return (
        <div>
            <h2>Hello {userName}</h2>
            <h3>( Alias {userAliasName})</h3>
        </div>
    )
}


export default GreetWithDestructure;