import React from "react";
import { Route, withRouter } from 'react-router-dom';



class EditArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state)).then(() => this.props.history.push('/'));
  }

  render () {

    return (
      <div className="edit-artist-full-page">
        <div className="edit-artist-background">
          <div className="edit-artist-content">
            <h1 className="edit-artist-heading">Artist Profile for {this.props.currentUser.band_name}</h1>
              <form onSubmit={this.handleSubmit} className="edit-artist-form">
                {/*this.renderErrors()*/}
                <div className="edit-artist-label-inputs">
                    <div className="edit-artist-labels">
                      <label>Band name</label>
                      <label>Location</label>
                      <label>Description</label>
                    </div>
                    <div className="edit-artist-inputs">
                      <input type="text"
                        value={this.state.band_name}
                        onChange={this.update('band_name')}
                        className="edit-artist-input"
                      />
                      <input type="text"
                        value={this.state.band_location}
                        onChange={this.update('band_location')}
                        className="edit-artist-input"
                      />
                      <input type="text"
                        value={this.state.band_description}
                        onChange={this.update('band_description')}
                        className="edit-artist-input"
                      />
                    </div>
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
