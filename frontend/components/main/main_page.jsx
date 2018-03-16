import React from 'react';
import MainNavContainer from './main_nav_container';
import { Link } from 'react-router-dom';


export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  render () {
    return (
  <div>
    <div className="main-photo-block">
      <div className="main-large-photo"><img src={chris}/></div>
      <ul className="main-small-photos">
        <li><img src={bill}/></li>
        <li><img src={charlie}/></li>
        <li><img src={dewey}/></li>
      </ul>
    </div>

    <div className="featured-albums">
      {this.props.albums.map((album) => {
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
