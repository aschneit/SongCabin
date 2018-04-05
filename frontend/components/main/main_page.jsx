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
    if (!this.props.albums[1]) {
      return null;
    }
    return (
  <div>
    <div className="main-photo-block">
      <div className="main-large-photo"><Link to={`artists/${this.props.albums[1].artist_id}`}><img src={billie}/></Link></div>
      <ul className="main-small-photos">
        <li><Link to={`artists/${this.props.albums[3].artist_id}`}><img src={ben}/></Link></li>
        <li><Link to={`artists/${this.props.albums[1].artist_id}`}><img src={lester}/></Link></li>
        <li><Link to={`artists/${this.props.albums[2].artist_id}`}><img src={sonny}/></Link></li>
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
