import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import "./style.css"
import ExpenseDashboard from './Components/ExpenseDashboard'
import AddExpensesPage from './Components/AddExpensePage'

import EditExpensePage from './Components/EditExpensePage'

import HelpPage from './Components/HelpPage'

import NotFound from './Components/NotFound'
import Header from './Components/Header'

import { createStore, combineReducers } from 'redux';
import uuid  from 'uuid';

const AppRouter = () => {

//ACTIONS

//ADD_EXPENSE
const addExpense = ({ description = '', note = '',  amount = 0, createdAt = 0 } ={}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount, 
      createdAt

    }
  }
}
//REMOVE_EXPENSE

const removeExpense = ({id} ={}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
//EDIT_EXPENSE
//SET_TEXT_FILTER


//EXPENSES REDUCER 

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch(action.type) {
     case 'ADD_EXPENSE':
        return [...state,  action.expense ];
        case 'REMOVE_EXPENSE':
        return state.filter(({id}) => {
             return id !== action.id
        })
     default:
     return state;
   }
}




//FILTER REDUCERS

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined
}
const filtersReducers = (state  = filtersDefaultState, action) => {
       switch(action.type) {
         default:
         return state
       }
}

//STORE CREATION

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducers
  })
)
store.subscribe(() => {
  console.log(store.getState())
})


//ADDING EXPENSES
  const expenseOne =  store.dispatch(addExpense({
  description: 'Rent',
  amount: 190
}))



const expenseTwo = store.dispatch(addExpense({
  description: 'Car',
  amount: 10
}))

//REMOVING EXPENSES

store.dispatch(removeExpense({id: expenseOne.expense.id}))
console.log(expenseOne)

  //REDUCERS
  const demoState = {
    expenses: [{
      id: 'p202e222',
      description: 'January Rent',
      note: 'This is the last payment',
      amount: 3344,
      createdAt: 0
    }],

    filters: {
      text: 'rent',
      sortBy: 'amount', //data or amount
      startDate: undefined,
      endDate: undefined
    }
  }


  return (
      <BrowserRouter>
        <div>
        <Header />
        <Switch>
              <Route path = '/' component = {ExpenseDashboard} exact ={true} />
              <Route path = '/create' component = {AddExpensesPage}/>
              <Route path = '/edit/:id' component = {EditExpensePage}/>
              <Route path ='/help' component = {HelpPage}/>
              <Route component = {NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
