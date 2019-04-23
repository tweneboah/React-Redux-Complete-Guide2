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

//===============================
//ACTIONS
//=============================

//ADD_EXPENSE ACTION
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
//REMOVE_EXPENSE ACTION

const removeExpense = ({id} ={}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}


//EDIT_EXPENSE
const editExpense = (id, updates)=>{
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}
//SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return{
    type: 'SET_TEXT_FILTER',
    text
  }
}
// //SORT_BY_DATE
// const sortByDate = () => {
//   return {
//     type: 'SORT_BY_DATE'
//   }
// }

// //SORT_BY_AMOUNT
// const sortByAmount = () => {
//   return {
//     type: 'SORT_BY_AMOUNT'
//   }
// }

// //SET START DATE
// const setStartDate =(startDate) =>{
//  return{
//    type: 'SET_END_DATE',
//    startDate
//  }
// }

// //SET END DATE
// const setEndDate =(endDate) =>{
//   return{
//     type: 'SET_START_DATE',
//     endDate
//   }
//  }
//==================================
//REDUCERS
//================================

//EXPENSES REDUCER 
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
   switch(action.type) {
     case 'ADD_EXPENSE':
        return [...state,  action.expense];
        case 'REMOVE_EXPENSE':
        return state.filter(({id}) => {
             return id !== action.id
        })
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if(expense.id === action.id){
                return {
                  ...expense,
                  ...action.updates
                }
            }else {

            }
        })
     default:
     return state;
   }

}
    
//When filter returns true, it will put the value into new array but if the conditon is false we kick it out

//looking at our code return id !== action.id

//If id is not equall to what the user types (action.id) this means our filter function is true but if the id in the database is equall to what the user types, it makes our filter function false and the we discard that data into our array.



//the id is already in our database and we are comparing what the user want to delete

// When filter function returns true it means we will render the whole data

//In our case if the id in our database in not equall to what we are passing in



//FILTER REDUCERS

const filtersDefaultState = {
  text: 'nop',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducers = (state  = filtersDefaultState, action) => {
       switch(action.type) {
         case 'SET_TEXT_FILTER':
         return {
           ...state,
           text: action.text
         };
         case 'SORT_BY_AMOUNT':
          return {
            ...state,
            sortBy: 'amount'
          };
          case 'SORT_BY_DATE':
          return {
            ...state,
            sortBy: 'date'
          }
        
         case 'SET_START_DATE':
          return {
            ...state, 
            startDate: action.startDate
          }
          case 'SET_END_DATE':
          return {
            ...state,
            endDate: action.endDate
          }
          default:
         return state
       }
}

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1: -1;
    }else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1: -1;
    }
  })
};



//=============================
//STORE CREATION
//=====================

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducers
  })
)
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

//console.log(store.getState())
// //==========================
// //DISPATCHING ACTIONS
// //==========================


//ADDING EXPENSES
const expenseOne = store.dispatch(addExpense({
  description: 'Car',
  amount: 10,
  note: 'MY first rent'
}))



const expenseTwo = store.dispatch(addExpense({
  description: 'motto',
  amount: 20
}))



// // //REMOVING EXPENSES
// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// //EDIT EXPENSES
store.dispatch(editExpense(expenseTwo.expense.id, {
  amount: -900,
  note: 'hiiiii',
  description: 'Nissan'
 
}))


// // //FILLTER BY TEXT
 store.dispatch(setTextFilter('rent'));
 store.dispatch(setTextFilter(''));

// // //SORT BY DATA
// store.dispatch(sortByAmount())



// START AND END DATE
// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

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
