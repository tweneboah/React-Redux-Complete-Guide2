
import { createStore} from 'redux';


const initialState = {
    count: 3,
    name: 'Emmanuel'
}

//REDUCER

const reducer = (state =initialState, action) => {
    console.log('Reducer runing', action);
    return state
}



const store = createStore(
    reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;