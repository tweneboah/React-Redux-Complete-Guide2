import React from 'react';
import PostList from '../Components/PostList';
import UserHeader from '../Components/UserHeader'

const App = () => {
    return(
        <div className='ui container'>
            <PostList/>
            <UserHeader/>
        </div>
    )
};

export default App