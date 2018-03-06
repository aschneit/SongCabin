import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

export default Root;
