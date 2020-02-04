import React from "react";
import { Route, Link } from 'react-router-dom';


export default class ArtistShow extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    const { artist } = this.props;
    return (
      <div className='artist-column'>
        <div className='artist-image'>
          <img src={artist.image_url}/>
        </div>
        <div className="artist-show-name">
          {artist.band_name}
        </div>
        <div className="artist-location">
          {artist.band_location}
        </div>
        <div className="artist-description">
          {artist.band_description}
        </div>
        <div className="artist-website">
          <a href={`http://${artist.band_website}`} target='_new'>{artist.band_website}</a>
        </div>
      </div>

    );
  }


}
