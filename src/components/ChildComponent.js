import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor(props) {
      super(props)
      this.state = {
           childName: 'Aiswarya Manas'
      }
  }
  

    render() {
        return (
            <div>
                <br/> <br/>  <br/>
                <button onClick= {() => this.props.greetHandler(this.state.childName)}>Greet Dad</button>
            </div>
        )
    }
}

export default ChildComponent
