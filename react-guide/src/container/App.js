import React from 'react';
import '../container/App.css';

//COMPONENTS
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends React.Component {
  state = { 
    persons: [
     
      
      {id:'uuhgg', name: 'Sad', age :23},
      {id:'ddffff',name: 'Jsu', age :30},
      {id:'cccc',name: 'Carrick', age :16},
      {id:'utrrr', name: 'Sophoa', age :23},
      {id:'cccf',name: 'Tweneboah', age :30},
      {id:'ccggf',name: 'Prince', age :16}
    ],
    showPersons: false
   }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((myPerson) => {
      return myPerson.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  //DELET HANDLER
 deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({
        persons: persons
      })
 }

  togglePersonHandler = () => {
    console.log('Am')
     const doesShow = this.state.showPersons
     this.setState({
       showPersons: !doesShow
     })
  }

  render() { 
 
    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div >
         <Persons
            persons ={this.state.persons}
            clicked = {this.deletePersonHandler}
            changed ={this.nameChangeHandler}
         />
       </div>
    
      )
    }

    return ( 
      <div className="App">
    
       <Cockpit toggleButton = {this.togglePersonHandler}/>
         
        
         {persons}
   
    </div>
     );
  }
}
 
export default App;
