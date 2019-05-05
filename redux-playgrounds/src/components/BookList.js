import React, { Component } from 'react';
import {connect} from 'react-redux'
class BookList extends Component {

    render() { 
        console.log(this.props.books)
        return ( 
            <div>
                <h2>Book List</h2>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    // console.log(state)
    return {
       books: state.book
    }
}

export default connect(mapStateToProps) (BookList);