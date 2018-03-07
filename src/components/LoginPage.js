import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin}) => (
  <div>
  <button
    onClick={startLogin}>login</button>
</div>
);

const mapDispatchToProps = (dispatch) =>({
  startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined ,mapDispatchToProps)(LoginPage);
