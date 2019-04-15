import React from 'react';
import { NavLink } from 'react-router-dom';




const Header = () => {
    return (
        <header>
            <h2>Expenses App</h2>
            <NavLink to ="/" activeClassName = "is-active" exact = {true}> Dashboard</NavLink>
            <NavLink to ="/create" activeClassName = "is-active">Create Expense</NavLink>
            <NavLink to ="/help" activeClassName = "is-active"> Help</NavLink>
        </header>
    );
}
export default Header;