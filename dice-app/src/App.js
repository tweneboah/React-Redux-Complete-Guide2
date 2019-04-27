import React from 'react';
import './App.css';
import './index.css'
import RollDice from './RollDice'



class App extends React.Component {
 
  render() { 
    return ( 
      <div className='App'>
         <RollDice/>
      </div>
     );
  }
}
 

export default App;
