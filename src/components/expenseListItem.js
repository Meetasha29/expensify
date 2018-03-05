import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'
const ExpenseListItem=({id,description,amount,createdAt})=>(
    <div className="option">
      <Link to={`/edit/${id}`}>
       <h3>{description}</h3>
     </Link>
       <p>&#8377;{amount} -
         {moment(createdAt).format('MMMM Do,YYYY')}</p>
    </div>
  );
export default ExpenseListItem;
