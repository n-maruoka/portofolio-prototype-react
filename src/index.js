import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import createStore from './createStore';

// create instance of history 
const history = createBrowserHistory();

// create Store
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />    
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
