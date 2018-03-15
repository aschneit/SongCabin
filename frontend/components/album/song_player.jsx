import React from "react";
import { Route, withRouter } from "react-router-dom";
import { merge } from 'lodash';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      slider: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
  }


  handlePlay(e) {
    let value = (this.playerAudio.duration / 250);
    const slide = setInterval(() => {
        this.setState({slider: this.state.slider+1});
      }, (value * 1000));
    if (this.state.playing === false)
      {
        this.playerAudio.play();
        this.setState({playing: true});
        return slide;

      } else {
        this.playerAudio.pause();
        this.setState({playing: false});
        clearInterval(slide);
      }
  }



  render() {
    let icon;
    if (this.state.playing === true) {
      icon = pause;
    } else {
      icon = play;
    }
    const leadTrack = this.props.leadTrack[0] || {};
    return (
      <div>
        <div className="native-player">
        {this.props.leadTrack[0] &&
        <audio ref={(audio) => { this.playerAudio = audio; }} controls src={leadTrack.audio_url}></audio>
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
              {leadTrack.title}
            </div>
            <div className="slider-container">
              <input ref={(input) => { this.playerSlider = input; }} type="range" value={this.state.slider} min="1" max="250" className="slider" id="myRange"/>
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
