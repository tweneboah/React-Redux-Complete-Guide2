import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
  return (
           props.persons.map((person, index) => {
               return(
                 <div>
                <Person 
                    name = {person.name}
                    age={person.age}
                    click ={() => props.clicked(index)}
                    key={person.id}
                    changed ={(event)=>props.changed(event, person.id)}
                   
                    />

                </div>
               )
                    
                    
          })
     
  );
};

export default Persons;