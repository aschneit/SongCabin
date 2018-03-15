import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import MainNavContainer from './main/main_nav_container';
import MainPage from './main/main_page';
import { AuthRoute } from '../util/auth_route_util';
import { ProtectedRoute } from '../util/protected_route_util.jsx';
import ArtistPageContainer from './artist/artist_page_container';
import EditArtistContainer from './artist/edit_artist_container';
import CreateAlbumContainer from './album/create_album_container';

class App extends React.Component {
   componentDidMount() {
    window.thing = this.playerAudio;
  }
  render() {
    return (
      <div className = 'main'>
        <audio ref={(audio) => this.playerAudio = audio} src={"http://localhost:3000/assets/Jenny-9b167fb60d83bbfbc54cb098e666b747df71ac267939b94b9864bc066e6cb263.mp3"}
          onTimeUpdate={() => {console.log(this.playerAudio.currentTime)}}
          ></audio>
        <Route path="/" component={MainNavContainer}/>
        <Route exact path="/" component={MainPage}/>
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
