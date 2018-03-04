import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboardPage=()=>{
  return(
    <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
};

export default ExpenseDashboardPage;
