import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p className="box-layout__subtitle">It's time to get your expenses under control.</p>
      <button class="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) =>({
  startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined ,mapDispatchToProps)(LoginPage);
