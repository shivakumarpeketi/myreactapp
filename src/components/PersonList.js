import React, { Component } from 'react'
import Person from './Person';

export default class PersonList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    namesList() {
       const persons = [ {
            id:1,
            name: 'Siva Kumar',
            gender: 'Male'
        },
        {
            id:2,
            name: 'Raghu',
            gender: 'Male'
        },
        {
            id:3,
            name: 'Aisu',
            gender: 'Female'
        }
    ];
    let namesList = persons.map(person =><Person key={person.id} person={person}/>)
    
    return namesList;
    }
    
    render() {
        return (
            <div>
                    {this.namesList()}
            </div>
        )
    }
}
