import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage=(props)=>{
  return(
    <div className="content-container">
      <div className="register-form">
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(startAddExpense(expense));
      props.history.push('/')
      status: "add"
    }}/>
  </div>
</div>
);
};

export default connect()(AddExpensePage);
