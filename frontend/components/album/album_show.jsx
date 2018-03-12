import React from "react";
import { Route, Link } from 'react-router-dom';

export default class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    this.props.getAlbumTracks(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
     this.props.getAlbumTracks(nextProps.match.params.albumId);
    }
  }



  render () {
    const editButton = () => {
      if (this.props.currentUser.id === this.props.artist.id) {
        return <div className="edit-button"><button>Edit</button></div>;
      }
    };
    return (
      <div className='album-column'>
        <div className="album-left-column">
          <div className="album-name">
            {this.props.album.title}
          </div>
          <div className="artist-name">
            by <Link to={`/artists/${this.props.artist.id}/albums/${this.props.artist.most_recent_album}`}>{this.props.artist.band_name}</Link>
          </div>
          {editButton()}
          <div className="player">

          </div>
          <div className="digital-album">
            Digital Album
          </div>
          <div className="small-gray streaming-download">
            Streaming + Download
          </div>
          <div className="album-description-text formats">
            Includes unlimited streaming via the free SongCabin app, plus high-quality download in MP3, FLAC and more
          </div>
          <div className="album-empty-content">
          </div>
          <div className="track-list">
            <table>
            <tbody>
            {this.props.tracks.map((track, id) => {
              return (
                <tr key={id}>
                  <td className="small-player-icon-td">II</td>
                  <td className="track-number-td"><span>{track.order}.</span></td>
                  <td className="track-title-time-td"><span className="track-title">{track.title}</span><span className="track-time">5:14</span></td>
                </tr>
              );
            })}
            </tbody>
            </table>
          </div>
          <div className="album-description-text description">
            {this.props.album.description}
          </div>
        </div>
        <div className="album-right-column">
          <div className="album-image">
            <img src={this.props.album.image_url}/>
          </div>
        </div>
      </div>

    );
  }


}
