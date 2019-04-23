import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducers from '../reducers/filters'
//=============================
//STORE CREATION
//=====================

export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducers
        })
      )
      return store
};

