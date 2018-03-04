const filterReducerDefaultState={
  text: "''",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
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
export default filterReducer;