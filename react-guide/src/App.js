import React from 'react';
import './App.css';

//COMPONENTS
import Person from './Person/Person'

class App extends React.Component {
  state = { 
    persons: [
      {name: 'Emmanuel', age :23},
      {name: 'Tweneboah', age :30},
      {name: 'Prince', age :16}
    ],
    showPersons: false
   }


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
       {name: 'Emmanuel 3', age :23},
       {name: event.target.value , age :30},
       {name: 'Prince 3', age :16}
      ]
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
