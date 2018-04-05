import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ScrollToTop from './scroll_to_top';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter >
    <ScrollToTop>
      <App/>
    </ScrollToTop>
    </HashRouter>
  </Provider>
);

export default Root;
