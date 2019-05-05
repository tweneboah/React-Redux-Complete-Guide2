import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component {
    
    componentDidMount(){
        this.props.fetchPosts();
        
        // console.log(this.props.fetchPosts())
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>
                 <h1>POST LIST</h1>
                 {this.props.posts.map((post) => {
                     return (
                         <div className='item' key={post.id}>
                            <i className='large middle aligned icon user'/>
                               <div className='content'>
                                 <div className='description'>
                                 <h2 style={{color: 'pink'}}>{post.title}</h2>
                                   <p>{post.body}</p>
                                 </div>

                               </div>
                    
                         </div>
                      
                     )
                 })}
            </div>
         );
    }
}

//GETTING DATA FROM REDUX SIDE TO COMPONENENT
const mapStateToProp = (state) => {
  
  return {
      posts: state.posts
  }

}
 
export default connect(mapStateToProp, {
    fetchPosts: fetchPosts
   
})(PostList);