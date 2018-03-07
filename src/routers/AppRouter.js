import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route,Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFound.js';
import EditExpensePage from '../components/EditExpense.js';
import AddExpensePage from '../components/AddExpense.js';
import ExpenseDashboardPage from '../components/Dashboard.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
const AppRouter=()=>{
  return(
  <Router history={history}>
    <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</Router>
);
}
export default AppRouter;
//Use stateless component wherever state is not being used
