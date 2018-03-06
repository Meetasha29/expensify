import{ createStore,combineReducers,applyMiddleware} from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';
import thunk from 'redux-thunk';

export default()=>{
const store=createStore
(combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
}),
applyMiddleware(thunk)
);
  return store;
};
