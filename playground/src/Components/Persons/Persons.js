import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {

    return (
        props.persons.map((person, index) =>{
            return (
                <div key ={person.age}>
                  <Person  name = {person.name}/>
                  <button onClick={() => props.delete(index)}>Delete</button>
                </div>
            )
        })
    )
    
}

export default Persons;