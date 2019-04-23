import React from 'react';
import './App.css';

//COMPONENTS
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

class App extends React.Component {
  state = { 
    username: 'Prince'
   }

   nameChangeHandler = (event) => {
     this.setState ({
       username: event.target.value
     })
   }

  render() { 
     return (
      <div className="App">
      <UserOutput developer = 'Emmanuel'/>
       <UserOutput username={this.state.username} />
       <UserInput changeName = {this.nameChangeHandler} currentName = {this.state.username}/>
       <button onClick={this.nameChangeHandler}>Chang Name</button>
  </div>
     )
  }
}
 
export default App;
