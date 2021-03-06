import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense=(expense)=>({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData={})=>{
  return (dispatch,getState)=> {
    const uid=getState().auth.uid;
    const {
      category='',
      description='',
      note='',
      amount=0,
      createdAt=0
    }=expenseData;
    const expense = {category,description,note,amount,createdAt};
    database.ref(`users/${uid}/expense`).push(expense).then((ref)=>{
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
  return(dispatch,getState)=>{
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/expense/${id}`).remove()
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
  return(dispatch,getState)=>{
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/expense/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id,updates));
    });
  };
};




export const setExpense=(expense)=>({
    type: 'SET_EXPENSE',
    expense
});

export const startSetExpense=()=>{
  return(dispatch,getState)=>{
    const uid=getState().auth.uid;
  return database.ref(`users/${uid}/expense`)
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
