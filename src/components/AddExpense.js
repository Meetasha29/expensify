import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage=(props)=>{
  return(
    <div>
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(startAddExpense(expense));
      props.history.push('/')
      status: "add"
    }}/>
  </div>
);
};

export default connect()(AddExpensePage);
