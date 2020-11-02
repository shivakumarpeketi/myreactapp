import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome to React..!..'
        }
    }

    changeMessage(){
        this.setState ({
            message: 'ReWelcome to  React'
        })
    }

    render() {
        return   (     
            <div>
                 <div>
                    <h3>{this.state.message}</h3>
                </div>
                <div><button onClick= {() => this.changeMessage()}>Hit me</button></div>
            </div>
        )
    }
}

export default Message