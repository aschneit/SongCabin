import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';
import { Link, NavLink } from 'react-router-dom';

export default class ArtistDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {dropDown: null};
  }

  handleDropDown (e) {
    this.setState({dropDown: (
      <ul className ="artist-nav-dropdown-contents">
        <li>
          <Link to={`/artists/${this.props.currentUser.id}`}>home</Link>
        </li>
        <li>
          <Link to={"/artist-edit"}>profile</Link>
        </li>
        <li>
          <button className="artist-nav-dropdown-logout" onClick={this.props.logout}>log out</button>
        </li>
      </ul>
    )});
  }

  handleBlur(e) {
    setTimeout(() => {
      this.setState({dropDown: null});
    }, 100);

  }


  render () {
    return (
      <div className = "artist-nav-dropdown" onClick={this.handleDropDown} onBlur={this.handleBlur}>
        <Link to="#" className = "artist-nav-dropdown-link">
          <div className = "artist-nav-dropdown-image">
            <img src = {this.props.currentUser.image_url}/>
          </div>
          <span className = "artist-nav-dropdown-name">
            {this.props.currentUser.band_name}
          </span>
          <span className = "artist-nav-dropdown-caret">
            <FontAwesomeIcon  className ="dropdown-caret" icon={faCaretDown} />
          </span>
        </Link>
        <div className = "artist-nav-dropdown-clicked">
          {this.state.dropDown}
        </div>

      </div>
    );
  }

}
