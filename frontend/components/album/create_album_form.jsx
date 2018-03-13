import React from "react";
import { Route, withRouter } from 'react-router-dom';



class CreateAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumTitle: "",
      albumDescription: "",
      albumArtistId: this.props.currentUser.id,
      imageFile: null,
      imageUrl: null,
      trackFile: null,
      trackTitle: "",
      trackOrder: null,
      trackAttributes: [],
      showForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.addForm = this.addForm.bind(this);
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

  updateAudio(e) {
    const audioFile = e.currentTarget.files[0];
    this.setState({ trackFile: audioFile, showForm: true });

  }

  addForm(e) {
    if (this.state.showForm) {
      return (
        <li>Hello</li>
      );
    } else {
      return null;
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
                <div className="create-album-label-inputs">
                  <div className="create-album-title">
                    <div className="create-album-label">
                      <label>Album Title</label>
                    </div>
                    <div className="create-album-input">
                      <input type="text"
                        value={this.state.albumTitle}
                        onChange={this.update('albumTitle')}
                        className="create-album-input"
                      />
                    </div>
                  </div>
                  <div className="create-album-credits">
                    <div className="create-album-label">
                      <label>Credits</label>
                    </div>
                    <div className="create-album-description">
                      <textarea
                          value={this.state.albumDescription}
                          onChange={this.update('albumDescription')}
                          className="create-album-desc"
                        />
                    </div>
                  </div>
                </div>
                <div className="update-album-image">
                  <label>Album Cover Image</label>
                  <div className="update-album-image-box">
                    <img src = {this.state.imageUrl}/>
                  </div>
                  <input className="inputfile" type="file" name="file" id="file" onChange={this.updateFile} />
                    <label htmlFor="file">Select file</label>
                  <div className="add-track">
                    <input className="add-track-button" type="file" name="file" id="file1" onClick={this.addForm} onChange={this.updateAudio} />
                    <label htmlFor="file1">add track</label>
                  </div>
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
