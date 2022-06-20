import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import { rootReducer } from './reducers';
const logger = ({ dispatch, getState }) => (next) => (action) => {

  if (typeof (action) !== 'function') {
    console.log('ACTION_TYPE', action.type);
  }

  next(action);
}
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   console.log('ACTION_TYPE', action.type);
//   next(action);
// }
const store = createStore(rootReducer, applyMiddleware(logger,thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

