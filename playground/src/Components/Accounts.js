import React, { Component } from 'react';
import { connect } from 'react-redux'

class Account extends Component {
    
    render() { 
        console.log(this.props.account)
        return ( 
            <div>
                <h1>My Account</h1>
                <h2>Total account is {this.props.account[0].amount}</h2>
            </div>
         );
    }
}
 

const mapStateToProps = (state) =>{
  
  return {
      account: state
  }
}
export default connect(mapStateToProps)(Account);