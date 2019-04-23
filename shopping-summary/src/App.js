import React, { Component } from 'react';
import { Grid} from 'react-bootstrap';
 import SubToal from './components/Subtotal/Subtotal';
 import PickupSavings  from './components/pickupSavings/PickupSavings';
 import TaxesFees from './components/TaxesFees/TaxesFees';
 import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
 import ItemDetails from './components/ItemDetails/ItemDetails'
 import './App'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100.0,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 200
    };
  }
  render() {
    return (
      <div className='container'>
        
             <SubToal price = {this.state.total.toFixed(2)}/>
             <PickupSavings price={this.state.pickupSavings}/>
             <TaxesFees taxes = {this.state.taxes}/>
             <hr></hr>

             <EstimatedTotal price ={this.state.estimatedTotal.toFixed(2)}/>

            <ItemDetails/>
            
           
      </div>
    );
  }
}

export default App;
