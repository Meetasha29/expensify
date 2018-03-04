import React from 'react';
const ExpenseListItem=({description,amount,createdAt})=>(
    <div className="option">
       <h3>{description}</h3>
       <p>{amount} = {createdAt}</p>
    </div>
  );


export default ExpenseListItem;
