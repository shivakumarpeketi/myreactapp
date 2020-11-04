import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name: 'Siva Kumar'
        }
    }
    
    clickHandler = () => {
       let updatedState =  {
            name: 'Siva Kumar PEKETI' ,
            nickName: 'Kanna'
         }
        this.setState(updatedState)
    }

    render() {
        return (
            <>
                Hello {this.state.name} 
              <div> <button onClick={this.clickHandler}>Click</button></div> 
            </>
        )
    }
}

export default EventBind
