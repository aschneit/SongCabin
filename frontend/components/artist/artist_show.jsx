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
      </div>

    );
  }


}
