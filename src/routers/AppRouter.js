import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route,Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFound.js';
import HelpPage from '../components/HelpPage.js';
import EditExpensePage from '../components/EditExpense.js';
import AddExpensePage from '../components/AddExpense.js';
import ExpenseDashboardPage from '../components/Dashboard.js';
import LoginPage from '../components/LoginPage.js';

export const history = createHistory();
const AppRouter=()=>{
  return(
  <Router history={history}>
    <div>
      <Header/>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/dashboard" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</Router>
);
}
export default AppRouter;
//Use stateless component wherever state is not being used
