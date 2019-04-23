import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//COMPONENTS
import  AddExpensesPage from './Components/routes/AddExpensePage'
import  EditExpensesPage from './Components/routes/EditExpensePage'
import  Header from './Components/routes/Header';
import  HelpPage from './Components/routes/HelpPage'
import  NotFound from './Components/routes/NotFound'
import ExpenseDashboard from './Components/routes/ExpenseDashboard';
import configureStore from './Components/store/configureStore';

import {addExpense} from './Components/actions/expenses';
import { setTextFilter} from './Components/actions/filters';
import getVisibleExpenses from './Components/selectors/expenses';
import { stat } from 'fs';

const store = configureStore();

//Adding Expenses
store.dispatch(addExpense({description: 'Water bill', note: 'Check it for me', createdAt: 'ftrre'}));
store.dispatch(addExpense({description: 'Gas bill'}));
store.dispatch(addExpense({description: 'phone bill'}));
store.dispatch(addExpense({description: 'This sumsung Phone is not good'}));


//Filtering
store.dispatch(setTextFilter('bill'))


//GetVisibleExpenses
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
class AppRouter extends Component {
  
  render() {
    console.log(visibleExpenses)
    return (
      <BrowserRouter>
        <div>
        <Header />
        <Switch>
        <Route path = '/' component = {ExpenseDashboard} exact ={true} />

        <Route path = '/create' component = {AddExpensesPage}/>

        <Route path = '/edit/:id' component = {EditExpensesPage}/>

        <Route path ='/help' component = {HelpPage}/>

        <Route component = {NotFound} />



        </Switch>
        </div>
      </BrowserRouter>
  );
  }
}

export default AppRouter;
