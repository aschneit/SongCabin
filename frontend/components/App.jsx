import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainNavContainer from './main/main_nav_container';

const App = () => (
  <div className = 'main'>
    <Route path="/" component={MainNavContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
