import React from 'react';
import './App.css';
import Person from './Components/Persons';
import Account from './Components/Accounts'
import createPolicy from './actions'




class App extends React.Component {
  
  render() { 


    return (  
      <div className="App">
        <h1>Redux Today</h1>
        <hr/>
       
        <Person/>

        <Account/>
    </div>
     );
  }
}
 
export default App;

