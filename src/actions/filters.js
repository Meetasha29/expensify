export const setTextFilter=(update)=>({
  type: 'TEXT_FILTER',
  update
});

export const sortByAmount=()=>({
  type: 'SORT_AMOUNT'
});

export const sortByDate=()=>({
  type: 'SORT_DATE'
});
export const setStartDate=(startDate)=>({
  type: 'SET_START_DATE',
  startDate
});
export const setEndDate=(endDate)=>({
  type: 'SET_END_DATE',
  endDate
});
