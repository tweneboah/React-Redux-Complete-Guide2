import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../actions'


class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() { 



        console.log(' From user component', this.props)
        return ( 
            <div>
                <h2>Am a header</h2>
                
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
   
    return {
        users: state
    }
}
export default connect(mapStateToProps, {
    fetchUser: fetchUser
})(UserHeader);