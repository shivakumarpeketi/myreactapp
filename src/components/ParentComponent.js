import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
constructor(props) {
    super(props)
    this.state = {
         parentName: 'Siva Kumar'
    }

  //  this.greetParent = this.greetParent.bind(this)
}

    greetParent = (childName) => {
        alert(`Good Morning Dad(${this.state.parentName})    
                                                         -${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler= {this.greetParent} />
            </div>
        )
    }
}


export default  ParentComponent