import React from "react";
import { Route, Link } from 'react-router-dom';


export default class Discog extends React.Component {
  constructor(props) {
    super(props);
    this.handleMore = this.handleMore.bind(this);
  }

  handleMore (e) {


    }


  render () {
    const { albums } = this.props;
    const a = albums.reverse();
    return (
      <div className='discog-column'>
        <div className='disco-heading'>
          discography
        </div>
        <ul className="disco-list">
        {(albums.length > 0) &&
          a.slice(0, 3).map((album, idx) => {
            return (
              <li className='disco-item' key={idx}>
                <div className='disco-image'>
                  <Link to={`/artists/${a[idx].artist_id}/albums/${a[idx].id}`}><img src={a[idx].image_url}/></Link>
                </div>
                <div className='disco-title'>
                  <Link to={`/artists/${a[idx].artist_id}/albums/${a[idx].id}`}>{a[idx].title}</Link>
                </div>
              </li>
          );
          })
        }
        </ul>
      </div>
    );
  }


}

// {(albums.length > 0) &&
//
// <ul className='disco-list'>
//   <li><Link to={`artists/${albums[albums.length-1].artist_id}/albums/${albums[albums.length-1].id}`}>
//     <img src={albums[albums.length-1].image_url}/>
//   </Link></li>
// <li><Link to={`artists/${albums[albums.length-2].artist_id}/albums/${albums[albums.length-2].id}`}>
//     <img src={albums[albums.length-2].image_url}/>
//   </Link></li>
// <li><Link to={`artists/${albums[albums.length-3].artist_id}/albums/${albums[albums.length-3].id}`}>
//     <img src={albums[albums.length-3].image_url}/>
//   </Link></li>
// </ul>
// }
