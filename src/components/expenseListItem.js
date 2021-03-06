import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'

const ExpenseListItem = ({ id, category,description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__category">{category}</h3>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">&#8377;{amount}</h3>
  </Link>
);

export default ExpenseListItem;
