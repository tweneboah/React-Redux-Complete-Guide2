import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addGroceryById} from '../actions'
class ShoppingBag extends Component {

    render() { 
        console.log('From Shopping Bag component', this.props.shoppingBag)
        return ( 
            <div className='container'>
               <div className='row'>
                 <div className='col-md-4'>
                 <ul className="list-group">
                 <h1>Shopping Bag Items</h1>
                 {this.props.shoppingBag.map((item) => {
                    return   <li key={item.id}
                    className="list-group-item">
                  <b>{item.name} </b> - <span className='badge badge-primary'> {item.cost}</span> - <span className= 'badge badge-danger'>{item.calories}kg</span> - <span className='badge badge-warning'>{item.weight}</span>
                   </li>
                 })}
                   
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
export default connect(mapStateToProps, {addGroceryById}) (ShoppingBag);