import React from 'react'
import './Person.css'

const Person = (props) => {

    return (
    <div className='Person'>
    
    <h5 onClick={props.click}>I'm a {props.name}. My random age is with {Math.floor(Math.random() * 30)} years old</h5>
         <h4>My actual age is {props.age}</h4>
         <input type='text' value ={props.name} onChange={props.changed}></input>
         <button onClick={props.click}>Delete</button>
         

    </div>
    )



  
}

export default Person;