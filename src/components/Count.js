import React, { Component } from 'react'

 class Count extends Component {
     constructor(props){
         super(props)
         this.state = {
             count:0
         }
     }

     increaseCount(){
         this.setState((prevState) => ({
             count : prevState.count+1
         }))
     }
    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick= {() => this.increaseCount()}>increase count</button>
            </div>
        )
    }
}

export default Count