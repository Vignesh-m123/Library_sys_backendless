import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import Login from './Login.js';
import Store from './Redux/Store.js'
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Book from './Book'

ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
   <App/>
   </BrowserRouter>
   </Provider>,
  document.getElementById('root'));
