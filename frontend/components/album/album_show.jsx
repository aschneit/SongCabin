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

  handleTrack (e) {
    if (e.currentTarget.value !== this.props.currentTrack.id) {
      this.props.sendCurrentTrack({id: e.currentTarget.value, playing: true});

    } else if ((e.currentTarget.value === this.props.currentTrack.id) && (this.props.currentTrack.playing === true)) {
      this.props.sendCurrentTrack({id: e.currentTarget.value, playing: false});

    } else if ((e.currentTarget.value === this.props.currentTrack.id) && (this.props.currentTrack.playing === false)) {
      this.props.sendCurrentTrack({id: e.currentTarget.value, playing: true});

    }
  }

  toggleIcon(id) {
    let boldTrack;
    if ((this.props.currentTrack.playing === true) && (this.props.currentTrack.id === id)) {
    return pause;
  } else if ((this.props.currentTrack.playing === false) && (this.props.currentTrack.id === id)) {
    return play;
  } else {
    return play;
  }
}

  toggleBold(id) {
    if ((this.props.currentTrack.playing === true) && (this.props.currentTrack.id === id)) {
    return 'bold';
  }
  }


  render () {
    if (!this.props.album || !this.props.tracks || (this.props.tracks && this.props.tracks.length < 1) ) return null;
    const editButton = () => {
      if (this.props.currentUser && (this.props.currentUser.id === this.props.artist.id)) {
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
            {this.props.album.title}
          </div>
          <div className="artist-name">
            by <Link to={`/artists/${this.props.artist.id}/albums/${this.props.artist.most_recent_album}`}>{this.props.artist.band_name}</Link>
          </div>
          {/*editButton()*/}
          <div className="player">
            <SongPlayerContainer  sendCurrentTrack={this.props.sendCurrentTrack} tracks={this.props.tracks}/>
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
            {this.props.tracks.map((track, id) => {
              return (
                <ul className = "track-list-format" key={id}>
                  <li className="small-player-icon-td"></li>
                    <li onClick={this.handleTrack} value={track.id} className="small-player-icon"></li>
                    <li onClick={this.handleTrack} value={track.id} className="small-icon-play"><img src={this.toggleIcon(track.id)}/></li>
                  <li className="track-number-td"><span>{track.order}.</span></li>
                  <li className="track-title-time-td"><span className={`track-title ${this.toggleBold(track.id)}`}>{track.title}</span></li>
                </ul>

              );
            })}
            </ul>
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
