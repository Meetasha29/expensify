import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.js'
import './style/style.scss';
import 'normalize.css/normalize.css'
const doc=document.getElementById('app');



ReactDOM.render(<AppRouter />,doc);
