import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/fontawesome-free-solid';
import SearchBarContainer from '../main/search_bar_container.jsx';





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
        <div className = "artist-nav-dropdown" >
          <Link to={"#"} className = "artist-nav-dropdown-link">
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

          </div>
          {/*<ul className="artist-nav-session-buttons">

            <li className="artist-nav-logout">
              <button onClick={logout}>log out</button>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

const ArtistNav = ({ currentUser, logout, location }) => {

  let links;
  let yourSite;
  if (currentUser) {
    links = loggedInLinks(logout, currentUser);
      yourSite = (
      <li className="main-nav-yoursite">
        <Link to={`/artists/${currentUser.id}`}>your site</Link>
      </li>
    );
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

{/*<div className="main-nav-left">
  <div className="main-nav-left-top">
    <div className="main-logo">
      <Link to={"/"}>
        <img src={bc}/>songcabin
      </Link>
    </div>
  </div>
  <ul className="main-nav-left-bottom">{greeting}{yourSite}</ul>
</div>
<div className="main-nav-right">
  <div className="main-nav-right-top">
    <SearchBarContainer />
  </div>
  <div className="main-nav-right-bottom">{links}</div>
</div>*/}
