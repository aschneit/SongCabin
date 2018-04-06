import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import SearchBarContainer from './search_bar_container.jsx';

const loggedOutLinks = (openModal) => {
  return (
    <ul className="main-nav-session-buttons">
      <li className="main-nav-discover">
    
      </li>
      <li className="main-nav-signup">
        {/*<Link to={"/signup"}>sign up</Link>*/}
        <button onClick={() => openModal('signup')}>sign up</button>
      </li>
      <li className="main-nav-login">
        <Link to={"/login"}>log in</Link>
      </li>
    </ul>
  );
};

const loggedInLinks = logout => {
  return (
    <ul className="main-nav-session-buttons">
      <li className="main-nav-discover">

      </li>
      <li className="main-nav-logout">
        <button onClick={logout}>log out</button>
      </li>
    </ul>
  );
};

const MainNav = ({ currentUser, logout, openModal, location }) => {
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
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
    links = loggedOutLinks(openModal);
    greeting = (
      <li className="main-nav-greet-unlogged">Discover great music and support independent artists.</li>
    );
  }
  return (
    <div className="main-nav">
      <div className="main-nav-left">
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
      </div>
    </div>
  );
};

export default MainNav;
