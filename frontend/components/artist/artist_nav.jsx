import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import SearchBarContainer from '../main/search_bar_container.jsx';

const loggedOutLinks = () => {
  return (
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
  );
};

const loggedInLinks = logout => {
  return (
    <ul className="artist-nav-session-buttons">
      <li className="artist-nav-discover">
        discover
      </li>
      <li className="artist-nav-logout">
        <button onClick={logout}>log out</button>
      </li>
    </ul>
  );
};

const ArtistNav = ({ currentUser, logout, location }) => {

  let links;
  let greeting;
  let yourSite;
  if (currentUser) {
    links = loggedInLinks(logout);
    greeting = (
      <li className="main-nav-greeting">Hi {currentUser.band_name}</li>
    );
      yourSite = (
      <li className="main-nav-yoursite">
        <Link to={`/artists/${currentUser.id}`}>your site</Link>
      </li>
    );
  } else {
    links = loggedOutLinks();
    greeting = (
      <li className="artist-nav-greet-unlogged">Discover great music and support independent artists.</li>
    );
  }
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
        <div className="artist-nav-right">{links}
        </div>
      </div>
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
