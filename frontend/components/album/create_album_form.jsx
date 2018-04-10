import React from "react";
import { Route, withRouter } from "react-router-dom";
import TrackUploadContainer from "./track_upload_container";

class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numTracks: 1,
      albumTitle: "",
      albumDescription: "",
      albumArtistId: this.props.currentUser.id,
      imageFile: null,
      imageUrl: white,
      showForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleAppend = this.handleAppend.bind(this);
  }

  componentWillUnmount() {
     this.props.clearErrors(this.props.errors);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () =>
      this.setState({ imageUrl: fileReader.result, imageFile: file });
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleAppend(e) {
    e.preventDefault();
    this.setState({numTracks: this.state.numTracks + 1});
  }

  trackForms() {
    let i = 0;
    const trackForms = [];
    while (i < this.state.numTracks) {
      trackForms.push(<TrackUploadContainer key={i} ord={i + 1}/>);
      i++;
    }
    return trackForms;
  }

  renderErrors() {

    return(
      <ul className="album-errors">
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    const formData = new FormData();
    e.preventDefault();
    this.props.tracks.forEach(track => {
      formData.append('album[tracks_attributes][][title]', track.title);
      formData.append('album[tracks_attributes][][audio]', track.file);
      formData.append('album[tracks_attributes][][order]', track.order);
    });
    const file = this.state.imageFile;
    formData.append("album[title]", this.state.albumTitle);
    formData.append("album[description]", this.state.albumDescription);
    formData.append("album[artist_id]", this.state.albumArtistId);
    if (file) formData.append("album[image]", file);
    this.props
      .processForm(formData)
      .then(() =>
        this.props.history.push(
          `/artists/${this.props.currentUser.id}`
        )
      );
  }

  render() {
    let textStatus;
    if (this.state.imageUrl && this.state.imageUrl !== white) {
      textStatus = "hide";
    }
    return (
      <div className="create-album-full-page">
        <div className="create-album-background">
            <form onSubmit={this.handleSubmit} className="create-album-form">
              <div className="create-album-form-content">
                {this.renderErrors()}
                <div className="create-album-left">
                  <div className="create-album-info-box">
                    <div className="create-album-small-img">
                      <img src={this.state.imageUrl}/>
                    </div>
                    <div className="create-album-title-artist">
                      <p className="create-album-title">
                        {!this.state.albumTitle && "Untitled Album"}
                        {this.state.albumTitle}
                      </p>
                      <p className="create-album-by">
                          by <span className="create-album-artist">
                          {this.props.currentUser.band_name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="create-album-right">
                  <div className="create-album-title-input">
                    <input
                      className="create-title-input"
                      type="text"
                      placeholder="album name"
                      value={this.state.albumTitle}
                      onChange={this.update("albumTitle")}
                    />
                  </div>
                  <div className="update-album-image">
                    <div className="update-album-image-box">
                      <img src={this.state.imageUrl}/>
                        <input
                          className={`inputfile-cover ${textStatus}`}
                          type="file"
                          name="file"
                          id="file"
                          onChange={this.updateFile}
                        />
                      <label htmlFor="file">Upload Album Art</label>

                      <p className={`update-album-image-hint ${textStatus}`}>
                        1400 x 1400 pixels minimum <br></br>
                        (bigger is better)
                      </p>
                    </div>
                  </div>
                  <div className="create-album-credits">
                    <div className="create-credits-label">album credits:</div>
                    <textarea
                      className="create-credits-input"
                      value={this.state.albumDescription}
                      onChange={this.update("albumDescription")}
                    />
                  </div>
                </div>

              { /*



              <button className="add-track-button" onClick={this.handleAppend}>
                Add Track
              </button>
              <div>
                {this.trackForms()}
              </div>
              <input
                className="create-album-submit"
                type="submit"
                value="Save"
              /> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(CreateAlbumForm);
