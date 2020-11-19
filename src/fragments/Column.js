import React, { Component } from 'react'

class Column extends Component {
    render() {
        return (
            <React.Fragment>
                <td>{this.props.value}</td>
            </React.Fragment>
        )
    }
}

export default Column
