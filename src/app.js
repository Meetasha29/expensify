import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import {addExpense,removeExpense,editExpense,startSetExpense} from './actions/expenses.js';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses';
import './style/style.scss';
import 'normalize.css/normalize.css'
import './firebase/firebase';

const store=configureStore();
const doc=document.getElementById('app');

// const expenseOne=store.dispatch(addExpense({description: 'Rent',amount: 10000}));
// const expenseTwo=store.dispatch(addExpense({description: 'Coffee',amount: 5000}));
//store.dispatch(editExpense(expenseTwo.expense.id,{amount: 80000}));
//store.dispatch(setTextFilter(''));
//store.dispatch(sortByAmount());


const state=store.getState();
//const visible=getVisibleExpenses(state.expenses,state.filters)
//console.log(visible);

const jsx=(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>,doc);

store.dispatch(startSetExpense()).then(()=>{
  ReactDOM.render(jsx,doc);
});
