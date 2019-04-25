import React from 'react';
import './App.css';

import Persons from './Components/Persons/Persons'


class App extends React.Component {
  
state ={
  persons: [
    {name: 'Emma' , age: 20},
    {name: 'Prince' , age: 12},
    {name: 'Twene' , age: 30},
    {name: 'Agnes' , age: 21}
  ]
}



deleteUser = (index) => {
    const persons2 = [...this.state.persons]
    persons2.splice(index, 1)
    this.setState({
      persons: persons2
    })
}

  render() { 
    const names = [1, 2, 3, 4, 5]
    const names2 = [...names]
    names2.splice(0, 2) 
    console.log(names2)
    return ( 
      <div className="App">
         <Persons  persons = {this.state.persons} delete = {this.deleteUser}/>
    </div>
     );
  }
}
 
export default App;

