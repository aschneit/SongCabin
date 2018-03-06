import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () =>{
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
