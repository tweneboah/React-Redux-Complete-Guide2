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

   //BUTTON FUNCTION
   switchNameHandler = () => {
     console.log('Was clicked')
     this.setState({
       persons: [
        {name: 'Emmanuel 2', age :23},
        {name: 'Tweneboah 2', age :30},
        {name: 'Prince 2', age :16}
       ],
      
     })
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
        <Person name={this.state.persons[0].name}  age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name}  age = {this.state.persons[1].age} changed = {this.nameChangeHandler} />

      <Person name={this.state.persons[2].name}  age = {this.state.persons[2].age}/>
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
