import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage=(props)=>{
  return(
    <div>
    This is the Add expense page
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(addExpense(expense));
      props.history.push('/')
      status: "add"
    }}/>
  </div>
);
};

export default connect()(AddExpensePage);
