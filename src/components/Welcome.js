import React, { Component } from 'react'

export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.props = props;
        console.log('This is Welcome Constructor');
    }
    
    render() {
        return (
            <div>
                  <h1> Welcome {this.props.name}</h1> <h2>{this.props.education}</h2>
            </div>
        )
    }
}
