import React from "react";
import { Route, withRouter } from 'react-router-dom';



class EditArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: this.props.currentUser.band_name,
      bandLocation: this.props.currentUser.band_location,
      bandDescription: this.props.currentUser.band_description,
      bandWebsite: this.props.currentUser.band_website,
      imageFile: null,
      imageUrl: this.props.currentUser.image_url
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillUnmount() {
     this.props.clearErrors(this.props.errors);
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
    e.preventDefault();
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("user[band_name]", this.state.bandName);
    formData.append("user[band_location]", this.state.bandLocation);
    formData.append("user[band_description]", this.state.bandDescription);
    formData.append("user[band_website]", this.state.bandWebsite);
    if (file) formData.append("user[image]", file);
    this.props.processForm(this.props.currentUser, formData)
    .then(() => this.props.history.push(`/artists/${this.props.currentUser.id}`));
  }

  render () {

    return (
      <div className="edit-artist-full-page">
        <div className="edit-artist-background">
          <div className="edit-artist-content">
            <h1 className="edit-artist-heading">Artist Profile for {this.props.currentUser.band_name}</h1>
              <form onSubmit={this.handleSubmit} className="edit-artist-form">
                {this.renderErrors()}
                <div className="edit-artist-label-inputs">
                    <div className="edit-artist-labels">
                      <label>Band name</label>
                      <label>Location</label>
                      <label>Description</label>
                      <label>Website</label>
                    </div>
                    <div className="edit-artist-inputs">
                      <input type="text"
                        value={this.state.bandName}
                        onChange={this.update('bandName')}
                        className="edit-artist-input"
                      />
                      <input type="text"
                        value={this.state.bandLocation}
                        onChange={this.update('bandLocation')}
                        className="edit-artist-input"
                      />
                    <input type="text"
                        value={this.state.bandDescription}
                        onChange={this.update('bandDescription')}
                        className="edit-artist-input"
                      />
                      <input type="text"
                          value={this.state.bandWebsite}
                          onChange={this.update('bandWebsite')}
                          className="edit-artist-input"
                        />
                    </div>
                </div>
                <div className="update-artist-image">
                  <div className="update-artist-image-label">
                    <label>Band Profile Image</label>
                  </div>
                  <div className="update-artist-image-img">
                    <img src = {this.state.imageUrl}/>
                  </div>
                  <input className="inputfile" type="file" name="file" id="file" onChange={this.updateFile} />
                    <label htmlFor="file">Select image</label>

                </div>
                <input className="edit-artist-submit" type="submit" value="Save"/>
              </form>
          </div>
        </div>

      </div>

    );
  }


}

export default withRouter(EditArtistForm);
