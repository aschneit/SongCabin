import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';
import { Link, NavLink } from 'react-router-dom';

export default class ArtistDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      dropDown: false
    };
  }

  handleDropDown (e) {
    this.setState({ dropDown: !this.state.dropDown });
  }

  handleBlur(e) {
    setTimeout(() => {
      this.setState({dropDown: null});
    }, 100);

  }


  render () {
    const { currentUser, logout } = this.props;
    const { dropDown } = this.state;
    return (
      <div className = {`artist-nav-dropdown ${dropDown ? 'open' : ''}`} onClick={this.handleDropDown} onBlur={this.handleBlur}>
        <Link to="#" className = "artist-nav-dropdown-link">
          <div className = "artist-nav-dropdown-image">
            <img src = {currentUser.image_url}/>
          </div>
          <span className = "artist-nav-dropdown-name">
            {currentUser.band_name}
          </span>
          <span className = "artist-nav-dropdown-caret">
            <FontAwesomeIcon  className ="dropdown-caret" icon={faCaretDown} />
          </span>
        </Link>
        <div className = "artist-nav-dropdown-clicked">
          {dropDown &&
            <ul className ="artist-nav-dropdown-contents">
              <li>
                <Link to={`/artists/${currentUser.id}`}>home</Link>
              </li>
              <li>
                <Link to={"/artist-edit"}>profile</Link>
              </li>
              <li>
                <button className="artist-nav-dropdown-logout" onClick={logout}>log out</button>
              </li>
            </ul>
          }
        </div>

      </div>
    );
  }

}
