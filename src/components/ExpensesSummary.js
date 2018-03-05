import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

const ExpensesSummary=(props)=>{
  const expenseWord = props.length===1 ? 'expense' : 'expenses';
  return(
    <div>
      <h1>Viewing {props.length} {expenseWord} totalling &#8377;{props.total}</h1>
  </div>
);
};

const mapStateToProps=(state) => {
  const visibleExpenses = selectExpenses(state.expenses,state.filters);
  return {
      length: visibleExpenses.length,
      total: expensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
