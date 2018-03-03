import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import {addExpense,removeExpense,editExpense} from './actions/expenses.js';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses';
import './style/style.scss';
import 'normalize.css/normalize.css'
const doc=document.getElementById('app');

const store=configureStore();
const unsubscribe=store.subscribe(()=>{
  const state=store.getState();
  const visible=getVisibleExpenses(state.expenses,state.filters)
  console.log(visible);
})
const expenseOne=store.dispatch(addExpense({description: 'Rent',amount: 10000}));
const expenseTwo=store.dispatch(addExpense({description: 'Coffee',amount: 5000}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 80000}));
store.dispatch(setTextFilter('e'));
store.dispatch(sortByAmount());
ReactDOM.render(<AppRouter />,doc);
