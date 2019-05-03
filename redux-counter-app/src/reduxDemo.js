import React, { Component } from 'react';

import { createStore} from 'redux';

class ReduxDemo extends Component {
   
    render() { 

        //Reducer
const reducer = (state, action) => {
    if(action.type === 'ATTACT'){
        return action.payload
    }
    return state
}


//step 1: create store
const store = createStore(reducer, 'peac')




//3. Subscribe
store.subscribe(() => {
    console.log('Store is now', store.getState())
});


//4. Dispatch Action
store.dispatch({
    type: 'ATTACK', payload: 'Supper man'
})

        return ( 
            <div>
                <h1>Redux Mastering</h1>
            </div>
         );
    }
}
 
export default ReduxDemo;