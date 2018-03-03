import{ createStore,combineReducers} from 'redux';

import uuid from 'uuid';
const addExpense=(
  {
    description='',
    note='',
    amount=0,
    createdAt=0
  }={})=>({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});


const removeExpense=(
  {
    id
  }={})=>({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense=(id,updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter=(update)=>({
  type: 'TEXT_FILTER',
  update
});

const sortByAmount=()=>({
  type: 'SORT_AMOUNT'
});

const sortByDate=()=>({
  type: 'SORT_DATE'
});
const setStartDate=(startDate)=>({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate=(endDate)=>({
  type: 'SET_END_DATE',
  endDate
});


const expensesReducerDefaultState=[];
const filterReducerDefaultState={
  text: "''",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const expensesReducer=(state=expensesReducerDefaultState,action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
    return[
      ...state,
      action.expense
    ];
    case 'EDIT_EXPENSE':
    //spread operater
    return state.map((expense) => {
        if(expense.id===action.id){
          return{
            ...expense,
            ...action.updates
          };
        }
        else {
          return expense;
        };
      });
    case 'REMOVE_EXPENSE':
    return state.filter(({id})=>action.id!==id);
    default:
    return state;
  }
}

const filterReducer=(state=filterReducerDefaultState,action)=>{
  switch(action.type){
    case 'TEXT_FILTER':
    return{
      ...state,
      text: action.update
    };
    case 'SORT_AMOUNT':
    return{
      ...state,
      sortBy: 'amount'
    };
    case 'SORT_DATE':
    return{
      ...state,
      sortBy: 'date'
    };
    case 'SET_START_DATE':
    return{
      ...state,
      startDate: action.startDate
    };
    case 'SET_END_DATE':
    return{
      ...state,
      endDate: action.endDate
    };
    default:
    return state;
  }
}

const store=createStore
(combineReducers({
  expenses: expensesReducer,
  filters: filterReducer

})
);
const unsubscribe=store.subscribe(()=>{
  const state=store.getState();
  const visible=getVisibleExpenses(state.expenses,state.filters)
  console.log(visible);
})
const getVisibleExpenses= (expenses,{text,sortBy,startDate,endDate})=>{
  return expenses.filter((expense)=>{
    const startDateMatch=typeof startDate!=='number' || expense.createdAt >= startDate;
    const endDateMatch=typeof endDate!=='number' || expense.createdAt <= endDate;
    const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;

  }).sort((a,b)=>{
    if(sortBy=='date'){
      return a.createdAt<b.createdAt? 1: -1;
    }
    else if(sortBy='amount'){
      return a.amount<b.amount? 1:-1;
    }
  });
};
const expenseOne=store.dispatch(addExpense({description: 'Rent',amount: 10000}));
const expenseTwo=store.dispatch(addExpense({description: 'Coffee',amount: 5000}));
//store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 80000}));
store.dispatch(setTextFilter('e'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());





const demoState={
  expenses:[{
    id: 'pajdnddd',
    description: 'this is january',
    note:'this is final',
    amount: 54599,
    createdAt: 0,
  }],
  filter:{
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

//expenses Reducer
