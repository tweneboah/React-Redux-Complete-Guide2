import React from 'react';
import '../container/App.css';

//COMPONENTS
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';

class App extends React.Component {
  state = { 
    persons: [
      {id:'fdfdd', name: 'Emmanuel', age :23},
      {id:'teee',name: 'Tweneboah', age :30},
      {id:'fgftrrfrtr',name: 'Prince', age :16},
      {id:'fdfdd', name: 'Atom', age :23},
      {id:'sdsdffsd',name: 'Mark', age :30},
      {id:'fccgftrtr',name: 'Derrick', age :16},
      {id:'aaaa', name: 'Sam', age :23},
      {id:'sssed',name: 'AB', age :30},
      {id:'jjgg',name: 'Came', age :16},
      {id:'reed', name: 'Enock', age :23},
      {id:'yugf',name: 'Evans', age :30},
      {id:'ddfcc',name: 'Narol', age :16},
      {id:'ertrdd', name: 'Bella', age :23},
      {id:'ffchh',name: 'Winnie', age :30},
      {id:'esdff',name: 'Smile', age :16},
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
     const doesShow = this.state.showPersons
     this.setState({
       showPersons: !doesShow
     })
  }

  render() { 
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      marging: '10px',
      color: 'white',
      cursor: 'pointer'
    }

    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div >
         
       </div>
    
      )
    }

    return ( 
      <div className="App">
    
       <h1>Hi react</h1>
       <p>This is really working</p>
       <button style={style}  onClick={this.togglePersonHandler}>Toggle Name</button>
         
         {persons}
         <Persons persons={this.state.persons}  clicked = {this.deletePersonHandler} changed = {this.togglePersonHandler}/>
   
    </div>
     );
  }
}
 
export default App;
