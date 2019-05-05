import React, { Component } from 'react';
import {connect} from 'react-redux';
class Stat extends Component {
  //TOTAL COST FUNCTION
  cost(){
   let totalCost = 0;
   this.props.shoppingBag.forEach((item) => {
      return totalCost += item.cost
   })
   return totalCost
}

  //TOTAL CALORIES FUNCTION
  calories(){
   let totalCalories = 0;
   this.props.shoppingBag.forEach((item) => {
      return totalCalories += item.calories
   })
   return totalCalories
}

  //TOTAL WEIGHT FUNCTION
  weight(){
   let totalWeight = 0;
   this.props.shoppingBag.forEach((item) => {
      return totalWeight += item.weight
   })
   return totalWeight
}



    render() { 
       console.log('From stats component', this.props)

     
        return ( 
            <div className='container'>
               <div className='row'>
                 <div className='col-md-4'>
                 <ul className="list-group">
                 <h1>Stats Items</h1>
                    <li className="list-group-item">Cost- ${this.cost()}</li>
                    <li className="list-group-item">Calories -${this.calories()}</li>
                    <li className="list-group-item">Weight -${this.weight()}</li>
                   
                    </ul>
                 </div>

               </div>
              
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
   return  {
       shoppingBag: state.shoppingBag
   }
 }
 export default connect(mapStateToProps) (Stat);