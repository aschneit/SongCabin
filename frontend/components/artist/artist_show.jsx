import React from "react";
import { Route, Link } from 'react-router-dom';


export default class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    return (
      <div className='artist-column'>
        <div className='artist-image'>
          <img src={this.props.artist.image_url}/>
        </div>
        <div className="artist-show-name">
          {this.props.artist.band_name}
        </div>
        <div className="artist-location">
          {this.props.artist.band_location}
        </div>
        <div className="artist-description">
          {this.props.artist.band_description}
        </div>
        <div className="artist-website">
          <a href={`http://${this.props.artist.band_website}`} target='_new'>{this.props.artist.band_website}</a>
        </div>
      </div>

    );
  }


}
