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

                    <table> 
                    <tr> <th>Name</th> <th>Favorite Color</th> </tr> 
                    <tr> <td>Bob</td> <td>Yellow</td> </tr> 
                    <tr> <td>Michelle</td> <td>Purple</td> </tr> 
                    
                </table>

                </div>
               )
                    
                    
          })
     
  );
};

export default Persons;