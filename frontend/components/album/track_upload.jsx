import React from "react";
import { Route, withRouter } from "react-router-dom";
import { merge } from 'lodash';

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {

        file: null,
        title: "",
        order: this.props.ord
      },
      showForm: false
    };
    this.updateFile = this.updateFile.bind(this);
  }

  update(field) {
    return e => {
      const newState = merge({}, this.state, {track: {[field]: e.currentTarget.value}});
      this.setState(newState, () => {

        this.props.receiveTrackData(this.state.track);
      });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const newState = merge({}, this.state, {track: {file: file}});
    this.setState(newState, () => {

      this.props.receiveTrackData(this.state.track);
    });
  }

  render() {
    return (
      <div>
        <div className="track-upload-main">
          <div className="track-title-info">
            <div className="track-title-label">
              <label>Track Title</label>
            </div>
            <div className="track-title-input">
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
              />
            </div>
          </div>

          <div className="track-file-label">
            <label>Track File</label>
          </div>
          <div>
            <input
              className="audio-file"
              type="file"
              name="file"
              id="file"
              onChange={this.updateFile}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackUpload);
