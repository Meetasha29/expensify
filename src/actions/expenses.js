import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense=(expense)=>({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData={})=>{
  return (dispatch)=> {
    const {
      description='',
      note='',
      amount=0,
      createdAt=0
    }=expenseData;
    const expense = {description,note,amount,createdAt};
    database.ref('expense').push(expense).then((ref)=>{
      dispatch(addExpense({
          id: ref.key,
          ...expense
      }))
    });
  };
};

export const removeExpense=({id}={})=>({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense=({id}={id})=>{
  return(dispatch)=>{
    return database.ref(`expense/${id}`).remove()
      .then(()=> {
        dispatch(removeExpense({id}));
      });
  };
};


export const editExpense=(id,updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense=(id,updates)=>{
  return(dispatch)=>{
    return database.ref(`expense/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id,updates));
    });
  };
};




export const setExpense=(expense)=>({
    type: 'SET_EXPENSE',
    expense
});

export const startSetExpense=()=>{
  return(dispatch)=>{
  return database.ref('expense')
  .once('value',(snapshot)=>{
    const expenses=[];
      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      //console.log(expenses);
     dispatch(setExpense(expenses));
      });
  };
};
