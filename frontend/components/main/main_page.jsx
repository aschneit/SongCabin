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
    const album1 = this.props.albums.find(album => album.artist === "Billie Holiday");
    const album2 = this.props.albums.find(album => album.artist === "Ben Webster");
    const album3 = this.props.albums.find(album => album.artist === "Billie Holiday");
    const album4 = this.props.albums.find(album => album.artist === "Sonny Rollins");

    if ([album1, album2, album3, album4].includes(undefined)) return null;

    return (
  <div>
    <div className="main-photo-block">
      <div className="main-large-photo"><Link to={`artists/${album1.artist_id}`}><img src={billie}/></Link></div>
      <ul className="main-small-photos">
        <li><Link to={`artists/${album2.artist_id}`}><img src={ben}/></Link></li>
        <li><Link to={`artists/${album3.artist_id}`}><img src={lester}/></Link></li>
        <li><Link to={`artists/${album4.artist_id}`}><img src={sonny}/></Link></li>
      </ul>
    </div>

    <div className="featured-albums">
      {this.props.albums.slice(0,5).map((album, id) => {
        return (
         <div className="album-pres" key={id}>
          <Link to={`/artists/${album.artist_id}/albums/${album.id}`}>
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
