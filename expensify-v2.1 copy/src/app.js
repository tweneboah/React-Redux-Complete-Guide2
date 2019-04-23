import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css"
import ExpenseDashboard from './Components/ExpenseDashboard'
import AddExpensesPage from './Components/AddExpensePage'

import EditExpensePage from './Components/EditExpensePage'

import HelpPage from './Components/HelpPage'

import NotFound from './Components/NotFound'
import Header from './Components/Header'

// import { createStore, combineReducers } from 'redux';
// import uuid  from 'uuid';

const AppRouter = () => {
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
