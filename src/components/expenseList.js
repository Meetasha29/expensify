import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';
const ExpenseList =(props)=>{
  return(
  <div>
    <h1>Expense List</h1>
    <ol>
      {
        props.expenses.map((expense)=>{

          return <ExpenseListItem {...expense} key={expense.id}/>;
        }
      )
      }
    </ol>
  </div>
)
};

const mapStateToProps=(state) => {
  return {
      expenses: selectExpenses(state.expenses,state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
