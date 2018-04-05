import React from 'react';
import MainNavContainer from './main_nav_container';
import { Link } from 'react-router-dom';


export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums('all');
  }

  render () {
    return (
  <div>
    <div className="main-photo-block">
      <div className="main-large-photo"><img src={billie}/></div>
      <ul className="main-small-photos">
        <li><img src={ben}/></li>
        <li><img src={lester}/></li>
        <li><img src={sonny}/></li>
      </ul>
    </div>

    <div className="featured-albums">
      {this.props.albums.slice(0,5).map((album) => {
        return (
         <div className="album-pres"><Link to={`/artists/${album.artist_id}/albums/${album.id}`}>
           <li className="main-albums-image"><img src = {album.image_url}/></li>
           <li className="main-albums-artist">{album.artist}</li>
           <li className="main-albums-title">{album.title}</li>
           </Link>
         </div>
        );
      })}
    </div>
  </div>
  );
  }
}
