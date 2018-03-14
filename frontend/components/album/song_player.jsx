import React from "react";
import { Route, withRouter } from "react-router-dom";
import { merge } from 'lodash';

class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(e) {
    if (this.state.playing == false)
      {
        this.playerAudio.play();
        this.setState({playing: true});
      } else {
        this.playerAudio.pause();
        this.setState({playing: false});
      }
  }

  render() {
    let playStatus;
    let pauseStatus;
    if (this.setState.playing === true) {
      playStatus = 'off';
      pauseStatus = 'on';
    } else {
      playStatus = 'on';
      pauseStatus = 'on';
    }
    return (
      <div>
        <div className="native-player">
        {this.props.leadTrack[0] &&
        <audio ref={(audio) => { this.playerAudio = audio; }} controls src={this.props.leadTrack[0].audio_url}></audio>
        }
        </div>
        <div className="player-total">
          <div className="player-button" onClick={this.handlePlay}>
            <div className={`play ${playStatus}`}>
              <img src={play}/>
            </div>
            <div className={`pause ${pauseStatus}`}>
              <img src={pause}/>
            </div>
          </div>
          <div className="player-mid-controls">
          </div>
          <div className="player-advance">
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(SongPlayer);
