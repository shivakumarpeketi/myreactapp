import React, {  useState } from 'react'
import ActionComponent from './ActionComponent'
import DynamicComponent from './DynamicComponent'
import Title from './Title'

function EmployeeComponent() {
    const [age, setAge] = useState(22)
    const [salary, setSalary] = useState(1000)
    console.log(`Rendering Employee Component `)

    const increaseAge = () => {
        setAge(age + 1)
    } //, [age])

    const increaseSalary = () => { 
        setSalary(salary + 1000) 
    }

    return (
        <div>
            <Title />
            <DynamicComponent data={age} label="Employee Age" />
            <ActionComponent actionFunction={increaseAge}>Increase Age</ActionComponent>
            <br /><br />
            <DynamicComponent data={salary} label="Employee Salary" />
            <ActionComponent actionFunction={increaseSalary}>Increase Salary</ActionComponent>
        </div>
    )
}

export default EmployeeComponent
