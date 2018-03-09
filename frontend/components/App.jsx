import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainNavContainer from './main/main_nav_container';
import MainPage from './main/main_page';
import { AuthRoute } from '../util/route_util';
import ArtistPageContainer from './artist/artist_page_container';

const App = () => (
  <div className = 'main'>
    <Route path="/" component={MainNavContainer}/>
    <Route exact path="/" component={MainPage}/>
    <Route path="/artists/:artistId" component={ArtistPageContainer}/>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
