import React, { Component } from 'react';
import {connect} from 'react-redux';
import myAction from '../actions'
class Person extends Component {
    
    render() { 
        
        return ( 
            <div>
                <h1 onClick={()=>this.props.myAction('Atom', 400)}>My name is {this.props.myDate[0].name} and my money is {this.props.myDate[0].amount} Ghc</h1>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {

   return {
       myDate: state
   }
}

export default connect(mapStateToProps, {myAction})(Person);