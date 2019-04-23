import React from 'react'
import './Person.css'

const Person = (props) => {

    return (
    <div className='Person'>
         <h5 onClick={props.click}>I'm a {props.name} with {Math.floor(Math.random() * 30)} years old</h5>
         <input type='text' value ={props.name} onChange={props.changed}></input>
         
    </div>
    )
}

export default Person;