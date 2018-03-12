import React from "react";
import { Route, withRouter } from 'react-router-dom';



class EditArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.artist;
  }

  render () {
    return (
      <div className="edit-artist-full-page">
        <div className="edit-artist-background">

        </div>

      </div>

    );
  }


}

export default withRouter(EditArtistForm);
