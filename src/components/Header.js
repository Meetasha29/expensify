import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,Link,NavLink} from 'react-router-dom';

const Header=()=>{
  return(
    <div>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Go home </NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
      <NavLink to="/help" activeClassName="is-active">help </NavLink>
  </div>
);
};

export default Header;
