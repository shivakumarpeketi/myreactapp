import React, { Component } from 'react'
import Column from './Column'

class TableRow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [{id:1, name:'Siva', age:32},{id:2, name:'Raghu', age:3},{id:3, name:'AM', age:2}]
        }
    }
    render() {
        return (
            <>
                {this.state.users.map(d => (
                    <React.Fragment key={d.id}>
                        <tr>
                            <Column value={d.id} />
                            <Column value={d.name} />
                            <Column value={d.age} />
                        </tr>
                    </React.Fragment>
                ))}
            </>
        )
    }
}

export default  TableRow
