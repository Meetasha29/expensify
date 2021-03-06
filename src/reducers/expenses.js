const expensesReducerDefaultState=[];

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
    case 'SET_EXPENSE':
    return action.expense;
    default:
    return state;
  }
}

export default expensesReducer;
