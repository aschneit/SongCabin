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
      imageUrl: null,
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
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
    return (
      <div className="create-album-full-page">
        <div className="create-album-background">
          <div className="create-album-content">
            <h1 className="create-album-heading">Create New Album</h1>
            <form onSubmit={this.handleSubmit} className="create-album-form">
              {this.renderErrors()}
              <div className="create-album-title">
                <label className="create-title-label">Album Title</label>
                <input
                  className="create-title-input"
                  type="text"
                  value={this.state.albumTitle}
                  onChange={this.update("albumTitle")}
                />
              </div>
              <div className="create-album-credits">
                <label className="create-credits-label">Credits</label>
                <textarea
                  className="create-credits-input"
                  value={this.state.albumDescription}
                  onChange={this.update("albumDescription")}
                />
              </div>

              <div className="update-album-image">
                <label>Album Cover Image</label>
                <div className="update-album-image-box">
                  <img src={this.state.imageUrl} />
                </div>
                <input
                  className="inputfile-cover"
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.updateFile}
                />
                <label htmlFor="file"></label>
              </div>
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
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateAlbumForm);
