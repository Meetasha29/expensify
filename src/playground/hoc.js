import React from 'react';
import ReactDOM from 'react-dom';

// Higher order component
//reuse the combineReducers
//abstract states
//prop manipulation
const Info=(props)=>{
  return(
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
)
};

const withAdminWarning=(WrappedComponent)=>{
  return(props)=>(
    <div>
      {props.isAdmin &&<p>This is private info.Please don't share</p>}

      <WrappedComponent {...props}/>
    </div>
  )
};
const requireAuthentication=(WrappedComponent)=>{
  return(props)=>(
    <div>
      {props.isAuthentication? (<WrappedComponent {...props}/>)
    : (<p>Please login to view the info</p>
    )}
    </div>
  )
};
const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthentication={false} info="there are the details" />,document.getElementById('app'));
