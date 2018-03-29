import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ""};
    this.handleInput = this.handleInput.bind(this);
  }



  handleInput(e) {
    this.setState({inputVal: e.currentTarget.value});
    this.props.fetchAlbums(e.currentTarget.value);
  }

  render () {
    return (
    <div>
      <form>
        <input value={this.state.inputVal} onChange={this.handleInput} className="artist-search-bar"
          type="text" placeholder="Search for artist, track or album"></input>
        <span><FontAwesomeIcon className="search-icon" icon={faSearch} /></span>
      </form>
      {this.props.albums.map(album =>{
        if (this.state.inputVal.length > 0 &&
        album.title.slice(0, this.state.inputVal.length) === this.state.inputVal) {
          return (
            <ul className="search-results-list">
              {this.props.albums.map(album =>{
                if (this.state.inputVal.length > 0 &&
                  album.title.slice(0, this.state.inputVal.length) === this.state.inputVal) {
                    return (
                        <li className="search-results-list-items">
                          <Link to={`/artists/${album.artist_id}/albums/${album.id}`}>
                            <div className="search-image-box">
                              <img src = {album.image_url} />
                            </div>
                            <div className="search-content-box">
                              <span>{album.title}</span>
                            </div>
                          </Link>
                        </li>
                    );
                  }
                })
              }
            </ul>
          );
          }
      }
      )
      }
    </div>
);
  }


}
