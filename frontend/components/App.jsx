import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainNavContainer from './main/main_nav_container';
import MainPageContainer from './main/main_page_container';
import { AuthRoute } from '../util/auth_route_util';
import { ProtectedRoute } from '../util/protected_route_util.jsx';
import ArtistPageContainer from './artist/artist_page_container';
import EditArtistContainer from './artist/edit_artist_container';
import CreateAlbumContainer from './album/create_album_container';
import ArtistNavContainer from './artist/artist_nav_container';

class App extends React.Component {

  render() {
    return (
      <div className = 'main'>
        <Route exact path="/" component={MainNavContainer}/>
        <Route path="/artists/:artistId" component={ArtistNavContainer}/>
        <Route exact path="/" component={MainPageContainer}/>
        <Route path="/artists/:artistId" component={ArtistPageContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute path="/artist-edit" component={EditArtistContainer} />
        <ProtectedRoute path="/albums/new" component={CreateAlbumContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
    );
  }
}

export default App;
