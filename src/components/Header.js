import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,Link,NavLink} from 'react-router-dom';

const Header=()=>{
  return(
    <header className="header row">
      <div className="content-container">
      <div className="col span-1-of-2">
      <Link className="header__title" to="/">
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
</div>
  </header>
);
};

export default Header;
