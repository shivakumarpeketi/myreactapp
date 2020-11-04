import React, { Component } from 'react'

class ClassClick extends Component {

    ClassClickHandler(){
        console.log("This is Class Component click handler response");
    }
    render() {
        return (
            <div>
                <button onClick={this.ClassClickHandler} >Click Class Component</button>
            </div>
        )
    }
}

export default   ClassClick 