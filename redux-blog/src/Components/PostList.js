import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends React.Component {
    
    componentDidMount(){
        this.props.fetchPosts()
        console.log(this.props.fetchPosts())
    }
    render() { 
        return ( 
            <div>
                 <h1>POST LIST</h1>
            </div>
         );
    }
}
 
export default connect(null, {
    fetchPosts: fetchPosts
})(PostList);