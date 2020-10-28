import React from 'react'

// function Greet() {
//     return <h1>Hello Siva Kumar</h1>
// }

let Greet = (props) => {

    return  (
    <div>
        <h2>Welcome to React handson...!</h2>
        <h1 >Hello {props.name} {props.surName} </h1>
        {props.childre}
    </div>
        )
}

 export default Greet;;