import React from "react";
import { Route, Link } from 'react-router-dom';


export default class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }


  render () {
    return (
      <div className='album-column'>
        <div className="album-left-column">
          <div className="album-name">
            {this.props.album.title}
          </div>
          <div className="artist-name">
            by <Link to={`/artists/${this.props.artist.id}/albums/${this.props.artist.most_recent_album}`}>{this.props.artist.band_name}</Link>
          </div>
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
            <img src={this.props.artist.image_url}/>
          </div>
        </div>
      </div>

    );
  }


}
