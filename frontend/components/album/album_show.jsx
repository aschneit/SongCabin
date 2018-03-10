import React from "react";
import { Route } from 'react-router-dom';


export default class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

  }



  render () {
    return (
      <div>
        <div className="album-left-column">
          <div className="album-name">

          </div>
          <div className="artist-name">
            {this.props.artist.band_name}
          </div>
        </div>
        <div className="album-right-column">

        </div>
      </div>

    );
  }


}
