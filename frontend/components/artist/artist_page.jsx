import React from "react";
import AlbumShowContainer from '../album/album_show_container';
import { Route, withRouter } from 'react-router-dom';


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
              <div className="artist-component">
                
              </div>
              <div className="discog-component">
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }


}

export default withRouter(ArtistPage);
