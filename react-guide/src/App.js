import React from 'react';
import './App.css';

//COMPONENTS
import Person from './Person/Person'

class App extends React.Component {
  state = { 
    persons: [
      {id:'fdfdd', name: 'Emmanuel', age :23},
      {id:'sdsdsd',name: 'Tweneboah', age :30},
      {id:'fgftrtr',name: 'Prince', age :16}
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
          {this.state.persons.map((person, index) => {
            return <Person 
            name = {person.name}
             age={person.age}
             click ={() => this.deletePersonHandler(index)}
             key={person.id}
             changed ={(event)=>this.nameChangeHandler(event, person.id)}
            />
          })}
       </div>
    
      )
    }

    return ( 
      <div className="App">
    
       <h1>Hi react</h1>
       <p>This is really working</p>
       <button style={style}  onClick={this.togglePersonHandler}>Toggle Name</button>
         
         {persons}
   
    </div>
     );
  }
}
 
export default App;
