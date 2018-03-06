import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './expenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboardPage=()=>{
  return(
    <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);
};

export default ExpenseDashboardPage;
