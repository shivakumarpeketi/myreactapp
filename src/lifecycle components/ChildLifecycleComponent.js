import React, { Component } from 'react'

class ChildLifecycleComponent extends Component {

    constructor(props) {
        super(props)
        console.log('Child Class');
        this.state = {
            childName: 'AM'
        }
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Child getDerivedStateFromProps');
        return null
    }

    render() {
        console.log('Child Render');
        return (
            <div>
                <h3>Child Component: {this.state.childName}</h3>
            </div>
        )
    }

    componentDidMount(){
        console.log('Child ComponentDidMount');
    }
}

export default ChildLifecycleComponent
