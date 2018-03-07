import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
const Header=({startLogout})=>{
  return(
    <header className="header row">
      <div className="content-container">
      <div className="col span-1-of-2">
      <Link className="header__title" to="/dashboard">
      <h1>Expensify</h1>
    </Link>
  </div>
  <div className="header__button col span-1-of-2">
    <Link to="/create">
    <button className="button">
    Add Expense
  </button>
</Link>
</div>
<button
  onClick={startLogout}>logout</button>
</div>
  </header>
);
};
const mapDispatchToProps = (dispatch) =>({
  startLogout: ()=>dispatch(startLogout())
});

export default connect(undefined ,mapDispatchToProps)(Header);
