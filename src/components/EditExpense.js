import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const EditExpensePage=(props)=>{
  return(
    <div className="content-container">
      <div className="register-form">
    <ExpenseForm onSubmit={(expense)=>{
      props.dispatch(startEditExpense(props.expense.id,expense));
      props.history.push('/')
    }}
    expense={props.expense}
    status= "edit"
    />
    <div className="field-button">
    <button className="button remove-button" onClick={()=>{
      props.dispatch(startRemoveExpense({id: props.expense.id}));
      props.history.push('/')

    }}>Remove</button>
  </div>

</div>
   </div>
);
};

const mapStateToProps=(state,props) => {
  return {
      expense: state.expenses.find((expense)=>expense.id===props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
