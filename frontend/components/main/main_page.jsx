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
      <div className="main-large-photo"><Link to="/artists/1/albums/1"><img src={billie}/></Link></div>
      <ul className="main-small-photos">
        <li><Link to="/artists/2/albums/5"><img src={ben}/></Link></li>
        <li><Link to="/artists/1/albums/2"><img src={lester}/></Link></li>
        <li><Link to="/artists/3/albums/3"><img src={sonny}/></Link></li>
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
