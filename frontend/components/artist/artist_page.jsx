import React from "react";
import AlbumShowContainer from '../album/album_show_container';
import { Route, withRouter } from 'react-router-dom';
import ArtistShowContainer from './artist_show_container';
import DiscogContainer from '../discog/discog_container';


class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount () {
    this.props.getArtist(this.props.match.params.artistId);
  }



  render () {
    return (
      <div className="artist-full-page">
        <div className="artist-background">
          <div className="artist-banner">
          </div>
          <div className="artist-content">
            <div className="album-component">
              <Route path={`${this.props.match.path}/albums/:albumId/`} component={AlbumShowContainer}/>
            </div>
            <div className="artist-discog-components">
              <Route path={`${this.props.match.path}/albums/:albumId/`} component={ArtistShowContainer}/>
              <Route path={`${this.props.match.path}/albums/:albumId/`} component={DiscogContainer }/>
            </div>
          </div>
        </div>

      </div>

    );
  }


}

export default withRouter(ArtistPage);
