import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers ,createStore } from 'redux'



function productReducer (state =[], action) {
    return state;
  
}


function userReducer (state = 'Atom', action) {
    return state;
}

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})

const store = createStore(allReducers,{
    products: [{name: 'iphone'}],
    user: 'Emmanuel'
},
window.devToolExtension && window.devToolExtension()
)

console.log(store.getState())


//action
const action = {
    type: 'changeState',
    payload:{
        newState: 'New state'
    }
}


store.dispatch(action)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
