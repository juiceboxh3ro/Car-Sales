import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { myReducer } from './reducers/myReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
  myReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, rootElement);
