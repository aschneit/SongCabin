import React from "react";
import { Route, withRouter } from "react-router-dom";
import { merge } from 'lodash';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.moveSlider = this.moveSlider.bind(this);
    this.handleDragSlider = this.handleDragSlider.bind(this);

  }


  moveSlider() {
    this.setState({slider: this.slider()});
  }

  handlePlay(e) {
    if (!this.props.currentTrack.id) {
      this.props.sendCurrentTrack({id: this.props.leadTrack[0].id, playing: true});
      this.playerAudio.play();
    } else if (this.props.currentTrack.playing === false) {
      this.playerAudio.play();
      this.props.sendCurrentTrack({playing: true});
    } else {
      this.playerAudio.pause();
      this.props.sendCurrentTrack({playing: false});
    }
  }

  handleDragSlider (e) {
    this.playerAudio.currentTime = e.currentTarget.value / 250 * this.playerAudio.duration;
  }



  slider () {
    return (this.playerAudio.currentTime / this.playerAudio.duration * 250);
  }

  render() {
    let playerTrack = {};
    if (this.props.leadTrack[0]) {
      playerTrack = this.props.leadTrack[0];
    }
    if (this.props.currentTrack.id) {
       playerTrack = this.props.tracks.filter((track) => {
        return track.id === this.props.currentTrack.id;
      })[0];
    }
    if (this.props.currentTrack.playing === true && this.playerAudio) {
      this.playerAudio.play();
    }
    if (this.props.currentTrack.playing === false && this.playerAudio) {
      this.playerAudio.pause();
    }
    let icon;
    if (this.props.currentTrack.playing === true) {
      icon = pause;
    } else {
      icon = play;
    }
    return (
      <div>
        <div className="native-player">
        {playerTrack &&
        <audio ref={(audio) => { this.playerAudio = audio; }}  src={playerTrack.audio_url} onTimeUpdate={this.moveSlider}></audio>
        }
        </div>
        <div className="player-total">
          <div className="player-button" onClick={this.handlePlay}>
            <div className="play">
              <img src={icon}/>
            </div>
          </div>
          <div className="player-mid-controls">
            <div className="current-track-title">
              {playerTrack && playerTrack.title}
            </div>
            <div className="slider-container">
              <input type="range" value={this.state.slider}
                onChange={this.handleDragSlider} min="1" max="250" className="slider" id="myRange"/>
            </div>
          </div>
          <div className="player-advance">
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(SongPlayer);
