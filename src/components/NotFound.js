import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,Link,NavLink} from 'react-router-dom';


const NotFoundPage=()=>{
  return(
    <div>
      Error 404! <Link to="/">Go home</Link>
  </div>
);
};

export default NotFoundPage;
