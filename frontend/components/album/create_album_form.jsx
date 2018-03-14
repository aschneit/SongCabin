import React from "react";
import { Route, withRouter } from 'react-router-dom';
import TrackUpload from './track_upload';



class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumTitle: "",
      albumDescription: "",
      albumArtistId: this.props.currentUser.id,
      imageFile: null,
      imageUrl: null,
      trackAttributes: [],
      showForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleAppend = this.handleAppend.bind(this);
    this.appendForm = this.appendForm.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () =>
    this.setState({ imageUrl: fileReader.result, imageFile: file});
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // updateAudio(e) {
  //   const audioFile = e.currentTarget.files[0];
  //   this.setState({ trackFile: audioFile, showForm: true });
  //
  // }

  handleAppend (e) {
    this.setState({showForm: true});
  }

  appendForm () {
    if (this.state.showForm === true) {
      return (
        <ul>
        <li><TrackUpload /></li>
          <button onClick={this.handleAppend} type="button" className="append-track-plus">
            +
          </button>
        </ul>
      );

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("album[title]", this.state.albumTitle);
    formData.append("album[description]", this.state.albumDescription);
    formData.append("album[artist_id]", this.state.albumArtistId);
    if (file) formData.append("album[image]", file);
    this.props.processForm(formData)
    .then(() => this.props.history.push(`/artists/${this.props.currentUser.id}/albums/${this.props.currentUser.most_recent_album}`));
  }


  render () {

    return (
      <div className="create-album-full-page">
        <div className="create-album-background">
          <div className="create-album-content">
            <h1 className="create-album-heading">Create New Album</h1>
              <form onSubmit={this.handleSubmit} className="create-album-form">
                  <div className="create-album-title">
                    <label className="create-title-label">Album Title</label>
                    <input className="create-title-input" type="text"
                      value={this.state.albumTitle}
                      onChange={this.update('albumTitle')}
                      />
                  </div>
                  <div className="create-album-credits">
                    <label className="create-credits-label">Credits</label>
                    <textarea className="create-credits-input"
                        value={this.state.albumDescription}
                        onChange={this.update('albumDescription')}
                      />
                  </div>
                <div className="update-album-image">
                  <label>Album Cover Image</label>
                  <div className="update-album-image-box">
                    <img src = {this.state.imageUrl}/>
                  </div>
                  <input className="inputfile-cover" type="file" name="file" id="file" onChange={this.updateFile} />
                    <label htmlFor="file">Select file</label>
                  <div>
                    <TrackUpload />
                    {this.appendForm() }
                  </div>
                  <button onClick={this.handleAppend} type="button" className="append-track-plus">
                    +
                  </button>
                </div>
                <input className="create-album-submit" type="submit" value="Save"/>
              </form>
          </div>
        </div>

      </div>

    );
  }


}

export default withRouter(CreateAlbumForm);
