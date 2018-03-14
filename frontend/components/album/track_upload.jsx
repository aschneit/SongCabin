import React from "react";
import { Route, withRouter } from 'react-router-dom';


class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      title: "",
      order: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({file});
  }


  handleSubmit(e) {

    e.preventDefault();
    this.props.prepareTrackData(this.state);
}


  render () {

    return (

    <div className="track-upload-main">
      <div className="track-title-info">
        <div className="track-title-label">
          <label>Track Title</label>
        </div>
        <div className="track-title-input">
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </div>
      </div>
      <div className="track-order-info">
        <div className="track-order-label">
          <label>Track Order</label>
        </div>
        <div className="track-order-input">
          <input type="text"
              value={this.state.order}
              onChange={this.update('order')}
            />
        </div>
      </div>
        <div className="track-file-label">
          <label>Track File</label>
        </div>
        <input className="audio-file" type="file" name="file" id="file" onChange={this.updateFile} />
    </div>

    );
  }


}

export default withRouter(TrackUpload);
