import React, { Component } from 'react'
import {connect} from 'react-redux'


class BookList extends Component {
    
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}>{book.title}</li>
            )
        })
    }

    render() { 
     console.log(this.props.books)
        return (
            <ul>
              {this.renderList()}
            </ul>
        )
    }
}
 
const mapStateToProps = (state) => {
    console.log(state.books)
    return {
        books: state.books
    }
}
export default connect(mapStateToProps) (BookList);