import React from "react";
import { Route, Link } from 'react-router-dom';
import SongPlayerContainer from './song_player_container';


export default class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrack = this.handleTrack.bind(this);

  }

  componentDidMount() {
    if (!this.props.tracks) return;
    const leadTrack = this.props.tracks.find((track) => {
      return track.order === 1;
    });
    if (leadTrack) {
      this.props.sendCurrentTrack({id: leadTrack.id, playing: false});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.tracks || !nextProps.tracks) return;
    if (!this.arraysAreEqual(this.props.tracks, nextProps.tracks)) {
      const leadTrack = nextProps.tracks.find((track) => {
        return track.order === 1;
      });
      if (leadTrack) {
        this.props.sendCurrentTrack({id: leadTrack.id, playing: false});
      }

    }
  }

  arraysAreEqual (arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i=0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  handleTrack (id) {
    return () => {
      if ((id === this.props.currentTrack.id) && (this.props.currentTrack.playing === true)) {
        this.props.sendCurrentTrack({id, playing: false});
      } else {
        this.props.sendCurrentTrack({id, playing: true});
      }
    };

  }

  toggleIcon(id) {
    if ((this.props.currentTrack.playing === true) && (this.props.currentTrack.id === id)) {
      return pause;
    } else  {
      return play;
    }
}

  toggleBold(id) {
    if ((this.props.currentTrack.playing === true) && (this.props.currentTrack.id === id)) {
      return 'bold';
    }
  }


  render () {
    const { album, tracks, currentUser, artist, sendCurrentTrack } = this.props;
    if (!album || !tracks || (tracks && tracks.length < 1) ) return null;
    const editButton = () => {
      if (currentUser && (currentUser.id === artist.id)) {
        return (
          <div className = "add-edit-buttons">
              <div className="edit-button"><button><Link to="/albums/new">Add Album</Link></button></div>
              <div className="edit-artist-button"><button><Link to="/artist-edit">Edit Artist</Link></button></div>
          </div>
    );
      }
    };

    return (
      <div className='album-column'>
        <div className="album-left-column">
          <div className="album-name">
            {album.title}
          </div>
          <div className="artist-name">
            by <Link to={`/artists/${artist.id}/albums/${artist.most_recent_album}`}>{artist.band_name}</Link>
          </div>
          {editButton()}
          <div className="player">
            <SongPlayerContainer  sendCurrentTrack={sendCurrentTrack} tracks={tracks}/>
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
          <div>
            <ul className="track-list">
            {tracks.map((track, id) => {
              return (
                  <li className="track-list-item" key={id}>
                    <button onClick={this.handleTrack(track.id)} className="small-player-icon">
                      <img className="small-icon-play" src={this.toggleIcon(track.id)}/>
                    </button>
                    <span className="track-number-td"><span>{track.order}.</span></span>
                    <span className="track-title-time-td"><span className={`track-title ${this.toggleBold(track.id)}`}>{track.title}</span></span>
                  </li>
              );
            })}
            </ul>
          </div>
          <div className="album-description-text description">
            {album.description}
          </div>
        </div>
        <div className="album-right-column">
          <div className="album-image">
            <img src={album.image_url}/>
          </div>
        </div>
      </div>
    );
  }
}
