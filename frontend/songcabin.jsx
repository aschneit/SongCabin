import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () =>{
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { id: window.currentUser.id } };
    store = configureStore(preloadedState);
    delete window.currentUser;
} else {
  store = configureStore();
}
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
