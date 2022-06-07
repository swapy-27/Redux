import React from 'react';
import ReactDOM from 'react-dom/client';

import  { createStore} from 'redux'
import App from './App';
import movies from './reducers';

const store = createStore(movies);
console.log(store)
console.log('beforeState',store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));


store.dispatch({
  type:"ADD_MOVIES",
  movies:[{name:'SUPERMAN'}]

})
console.log('afterState',store.getState())
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

