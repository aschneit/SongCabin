import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/fontawesome-free-solid';
import SearchBarContainer from '../main/search_bar_container.jsx';
import ArtistDropDown from './artist_dropdown';




const loggedOutLinks = () => {
  return (
    <div className="artist-nav">
      <div className="artist-nav-bar">
        <div className="artist-nav-logo">
          <Link to={"/"}>
            <img src={bc}/><span>songcabin</span>
          </Link>
        </div>
        <div className = "artist-nav-discover">
          discover
        </div>
        <div className= "artist-nav-search">
          <SearchBarContainer />
        </div>
        <div className="artist-nav-right">
          <ul className="artist-nav-session-buttons">
            <li className="artist-nav-right-link">
              gift cards
            </li>
            <li className="artist-nav-right-link">
              <Link to={"/signup"}>sign up</Link>
            </li>
            <li className="artist-nav-right-link">
              <Link to={"/login"}>log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const loggedInLinks = (logout, currentUser) => {
  return (
    <div className="artist-nav">
      <div className="artist-nav-bar">
        <div className="artist-nav-logo logged">
          <Link to={"/"}>
            <img src={bc}/><span>songcabin</span>
          </Link>
        </div>
        <div className = "artist-nav-addalbum">
          <Link to={"/albums/new"}>
            add album
          </Link>
        </div>
        <ArtistDropDown logout={logout} currentUser={currentUser}/>
      </div>
    </div>
  );
};

const ArtistNav = ({ currentUser, logout, location }) => {

  let links;
  if (currentUser) {
    links = loggedInLinks(logout, currentUser);
  } else {
    links = loggedOutLinks();
  }
  return (
    <div>
      {links}
    </div>
  );
};

export default ArtistNav;
