import React from 'react';
import './App.css';
import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stat from './components/Stat'


function App() {
  return (
    <div>
        <Grocery/>
        <ShoppingBag/>
        <Stat/>
    </div>
  );
}

export default App;
