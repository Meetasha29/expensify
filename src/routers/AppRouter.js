import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,Link,NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFound.js';
import HelpPage from '../components/HelpPage.js';
import EditExpensePage from '../components/EditExpense.js';
import AddExpensePage from '../components/AddExpense.js';
import ExpenseDashboardPage from '../components/Dashboard.js';



const AppRouter=()=>{
  return(
  <BrowserRouter>
    <div>
      <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  </BrowserRouter>
);
}
export default AppRouter;
//Use stateless component wherever state is not being used
