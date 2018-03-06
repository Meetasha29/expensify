import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './expenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboardPage=()=>{
  return(
    <div>
      <div className="summary-filter">
      <div className="content-container">
    <ExpensesSummary />
    <ExpenseListFilters />
  </div>
</div>
    <ExpenseList />
  </div>
);
};

export default ExpenseDashboardPage;
