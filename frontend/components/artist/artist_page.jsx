import React from "react";
import AlbumShowContainer from '../album/album_show_container';
import { Route, withRouter } from 'react-router-dom';


class ArtistPage extends React.Component {


  componentDidMount () {
    this.props.getArtist(this.props.artist.id);
  }


  render () {
    return (
      <div className="artist-full-page">
        <div className="artist-background">
          <div className="artist-banner">
          </div>
          <Route path={`${this.props.match.path}/albums/:albumId/`} component={AlbumShowContainer}/>
        </div>

      </div>

    );
  }


}

export default withRouter(ArtistPage);
