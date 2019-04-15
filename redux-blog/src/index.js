import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunks from 'redux-thunk';

import App from './Components/app';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunks))

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, 
    document.querySelector('#root')
);
