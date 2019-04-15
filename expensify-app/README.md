# React Route

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import DashboardPage from './DashboardPage';


const ExpenseDashboard = () => {
    return (
        <div>
            This is from DashboardPage
        </div>
    );
}


const AddExpensesPage = () => {
    return (
        <div>
            This is from my AddExpensesPage
        </div>
    );
}

const EditExpensePage = () => {
    return (
        <div>
            This is from EditExpensePage
        </div>
    );
}

const HelpPage = () => {
    return (
        <div>
            This is from HelpPage
        </div>
    );
}

const NotFound = () => {
    return (
        <div>
            404
        </div>
    );
}


const Routes = () => {
  return (
      <BrowserRouter>
        <Switch>
              <Route path = '/' component = {ExpenseDashboard} exact ={true} />
              <Route path = '/create' component = {AddExpensesPage}/>
              <Route path = '/edit' component = {EditExpensePage}/>
              <Route path ='/help' component = {HelpPage}/>
              <Route component = {NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

ReactDOM.render(<Routes  />, document.getElementById('root'));
```

# React Route Link

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

//import DashboardPage from './DashboardPage';


const ExpenseDashboard = () => {
    return (
        <div>
            This is from DashboardPage
        </div>
    );
}


const AddExpensesPage = () => {
    return (
        <div>
            This is from my AddExpensesPage
        </div>
    );
}

const EditExpensePage = () => {
    return (
        <div>
            This is from EditExpensePage
        </div>
    );
}

const HelpPage = () => {
    return (
        <div>
            This is from HelpPage
        </div>
    );
}

const NotFound = () => {
    return (
        <div>
            404 - <Link to ="/"> Go Home</Link>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h2>Expenses App</h2>
            <Link to ="/">Dashboard</Link>
            <Link to ="/create">Create Expense</Link>
            <Link to ="/edit"> Edit Expense</Link>
            <Link to ="/help"> Help</Link>
        </header>
    );
}


const Routes = () => {
  return (
      <BrowserRouter>
        <div>
        <Header />
        <Switch>
              <Route path = '/' component = {ExpenseDashboard} exact ={true} />
              <Route path = '/create' component = {AddExpensesPage}/>
              <Route path = '/edit' component = {EditExpensePage}/>
              <Route path ='/help' component = {HelpPage}/>
              <Route component = {NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
  );
}

ReactDOM.render(<Routes  />, document.getElementById('root'));

```
# React Route NavLink

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import "./style.css"

//import DashboardPage from './DashboardPage';


const ExpenseDashboard = () => {
    return (
        <div>
            This is from DashboardPage
        </div>
    );
}


const AddExpensesPage = () => {
    return (
        <div>
            This is from my AddExpensesPage
        </div>
    );
}

const EditExpensePage = () => {
    return (
        <div>
            This is from EditExpensePage
        </div>
    );
}

const HelpPage = () => {
    return (
        <div>
            This is from HelpPage
        </div>
    );
}

const NotFound = () => {
    return (
        <div>
            404 - <Link to ="/"> Go Home</Link>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h2>Expenses App</h2>
            <NavLink to ="/" activeClassName = "is-active" exact = {true}> Dashboard</NavLink>
            <NavLink to ="/create" activeClassName = "is-active">Create Expense</NavLink>
            <NavLink to ="/edit" activeClassName = "is-active"> Edit Expense</NavLink>
            <NavLink to ="/help" activeClassName = "is-active"> Help</NavLink>
        </header>
    );
}


const Routes = () => {
  return (
      <BrowserRouter>
        <div>
        <Header />
        <Switch>
              <Route path = '/' component = {ExpenseDashboard} exact ={true} />
              <Route path = '/create' component = {AddExpensesPage}/>
              <Route path = '/edit' component = {EditExpensePage}/>
              <Route path ='/help' component = {HelpPage}/>
              <Route component = {NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
  );
}

ReactDOM.render(<Routes  />, document.getElementById('root'));

```