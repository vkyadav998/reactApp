import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
