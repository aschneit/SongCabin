import React from "react";
import AlbumShowContainer from '../album/album_show_container';
import { Route, withRouter } from 'react-router-dom';
import ArtistShow from './artist_show';
import Discog from '../discog/discog';


class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount () {
    this.props.getArtist(this.props.match.params.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.artistId !== nextProps.match.params.artistId) {
     this.props.getArtist(nextProps.match.params.artistId);
    }
  }

  render () {
    const { albums, artist, tracks } = this.props;
    if (!artist && (!albums || !albums.length)) return null;
    let album;
    if (this.props.match.params.albumId) {
      album = albums.find(a => a.id == this.props.match.params.albumId);
    } else {
      album = albums.find(a => a.id == artist.most_recent_album);
    }
    const filteredTracks = album && tracks.filter(track => {
      return track.album_id === album.id;
    });
    return (
      <div className="artist-full-page">
        <div className="artist-background">
          <div className="artist-banner">
          </div>
          <div className="artist-content">
            <div className="album-component">
              <AlbumShowContainer artist={artist} album={album} tracks={filteredTracks} />
            </div>
            <div className="artist-discog-components">
              <ArtistShow artist={artist} />
              <Discog albums={albums} />
            </div>
          </div>
        </div>

      </div>

    );
  }


}

export default withRouter(ArtistPage);
