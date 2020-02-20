import React from "react";
import { Route, withRouter } from "react-router-dom";
import { merge } from 'lodash';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0,
      duration: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.moveSlider = this.moveSlider.bind(this);
    this.handleDragSlider = this.handleDragSlider.bind(this);
    this.handleMetaData = this.handleMetaData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTrack.id !== nextProps.currentTrack.id) {
      this.setState({slider: 0});
    }
  }

  moveSlider() {
    const slider = this.playerAudio.currentTime ?
      this.playerAudio.currentTime / this.playerAudio.duration * 250 : 0;
    this.setState({ slider });
  }

  handlePlay() {
    if (!this.props.currentTrack.id) {
      this.props.sendCurrentTrack({ id: this.props.leadTrack.id, playing: true });
    } else {
      this.props.sendCurrentTrack({ playing: !this.props.currentTrack.playing });
    }
  }

  handleDragSlider(e) {
    this.playerAudio.currentTime = e.currentTarget.value / 250 * this.playerAudio.duration;
  }

  handleMetaData() {
    this.setState({ duration: this.playerAudio.duration });
  }

  render() {
    const { leadTrack, tracks, currentTrack } = this.props;
    const { duration, slider } = this.state;
    let playerTrack = currentTrack.id ?
      tracks.find(track => track.id === currentTrack.id) : leadTrack ?
      leadTrack : {};
    let durationMins, durationSecs, elapsedMins, elapsedSecs, time;
    if (this.playerAudio) {
      if (currentTrack.playing) {
        this.playerAudio.play();
      } else {
        this.playerAudio.pause();
      }
      durationMins = Math.floor(duration / 60);
      durationSecs = Math.floor(duration % 60);
      durationMins = durationMins < 10 ? '0' + durationMins : durationMins;
      durationSecs = durationSecs < 10 ? '0' + durationSecs : durationSecs;
      elapsedMins = Math.floor(this.playerAudio.currentTime / 60);
      elapsedSecs = Math.floor(this.playerAudio.currentTime % 60);
      elapsedMins = elapsedMins < 10 ? '0' + elapsedMins : elapsedMins;
      elapsedSecs = elapsedSecs < 10 ? '0' + elapsedSecs : elapsedSecs;
      time = elapsedMins + ':' + elapsedSecs + ' / ' + durationMins + ':' + durationSecs;
    }
    return (
      <div>
        <div className="native-player">
        {playerTrack &&
        <audio
          ref={(audio) => {this.playerAudio = audio;}}
          src={playerTrack.audio_url}
          onTimeUpdate={this.moveSlider}
          onLoadedMetadata={this.handleMetaData}
        />
        }
        </div>
        <div className="player-total">
          <div className="player-button" onClick={this.handlePlay}>
            <div className="play">
              <img src={currentTrack.playing ? pause : play}/>
            </div>
          </div>
          <div className="player-mid-controls">
            <div className="current-track-info">
              <div className="current-track-title">
                {playerTrack && playerTrack.title}
              </div>
              <div className="current-track-time">
                {this.playerAudio && time}
              </div>
            </div>
            <div className="slider-container">
              <input type="range" value={slider}
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
