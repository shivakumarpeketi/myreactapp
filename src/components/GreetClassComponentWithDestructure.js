import React, { Component } from 'react'

class GreetClassComponentWithDestructure extends Component {
    render() {
        const {name, aliasName} = this.props
        return (
            <div>
                I'm {name} Alias {aliasName}
            </div>
        )
    }
}


export default  GreetClassComponentWithDestructure