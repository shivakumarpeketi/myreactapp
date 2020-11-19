import React from 'react'
//import LifecycleB from './LifecycleB';

export default class ParentLifecycleComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
             name: 'Shiva Kumar'
        }
        console.log('Parent Constructor');
    }


    static getDerivedStateFromProps(props, state) {
        console.log('Parent getDerivedStateFromProps');
        return null;
    }
 
    componentDidMount(){
        console.log('Parent componentDidMount');
        this.setState({
            name: 'Peketi'
        })
    }

    render() {
        console.log('Parent Render')
        return (
            <div>
                <h2>Parent Component: {this.state.name}</h2>
                {/* <LifecycleB /> */}
            </div>
        )
    }
}
