import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage=(props)=>{
  return(
    <div>
    This is the Edit expense page id={props.match.params.id}
  </div>
);
};

export default EditExpensePage;
