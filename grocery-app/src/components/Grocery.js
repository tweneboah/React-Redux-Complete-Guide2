import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGroceryById} from '../actions'


class Grocery extends Component {

    render() { 
        console.log('IS IT FROM PROPS: ' , this.props)
        return ( 
            <div className='container'>
               <div className='row'>
                 <div className='col-md-4'>
                 <ul className="list-group">
                 <h1>Grocery Items</h1>
                    {this.props.grocery.map((item) => {
                        return <li key={item.id}
                         className="list-group-item"
                         onClick={()=>this.props.addGroceryById(item.id)}>
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
 
function mapStateToProps(state){
    
    console.log(state)
    return {
        grocery: state.grocery
    }
}

export default connect(mapStateToProps, { addGroceryById} ) (Grocery);