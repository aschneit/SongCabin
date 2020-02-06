import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import SearchBarContainer from './search_bar_container.jsx';

const MainNav = ({ currentUser, logout, openModal, location }) => {
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  return (
    <React.Fragment>
      <div className="main-nav">
        <div className="main-nav-left">
          <div className="main-nav-left-top">
            <div className="main-logo">
              <Link to={"/"}>
                <img src={bc}/>songcabin
              </Link>
            </div>
          </div>
          <ul className="main-nav-left-bottom">
            {currentUser ?
              <React.Fragment>
                <li className="main-nav-greeting">Hi {currentUser.band_name}</li>
                <li className="main-nav-yoursite">
                  <Link to={`/artists/${currentUser.id}`}>your site</Link>
                </li>
              </React.Fragment>
              :
              <li className="main-nav-greet-unlogged">Discover great music and support independent artists.</li>
            }
          </ul>
        </div>
        <div className="main-nav-right">
          <div className="main-nav-right-top">
            <SearchBarContainer />
          </div>
          <div className="main-nav-right-bottom">
            {currentUser ?
              <ul className="main-nav-session-buttons">
                <li className="main-nav-logout">
                  <button onClick={logout}>log out</button>
                </li>
              </ul>
              :
              <ul className="main-nav-session-buttons">
                <li className="main-nav-signup">
                  <button onClick={() => openModal('signup')}>sign up</button>
                </li>
                <li className="main-nav-login">
                  <Link to={"/login"}>log in</Link>
                </li>
              </ul>
            }
          </div>
        </div>
      </div>

      <div className="main-nav-mobile">
        <div className="main-nav-top">
          <div className="main-nav-left-top">
              <Link className="main-logo" to={"/"}>
                <img src={bc}/>songcabin
              </Link>
          </div>
          <div className="main-nav-right-top">
            {currentUser ?
              <ul className="main-nav-session-buttons">
                <li className="main-nav-yoursite">
                  <Link to={`/artists/${currentUser.id}`}>your site</Link>
                </li>
                <li className="main-nav-logout">
                  <button onClick={logout}>log out</button>
                </li>
              </ul>
              :
              <ul className="main-nav-session-buttons">
                <li className="main-nav-signup">
                  <button onClick={() => openModal('signup')}>sign up</button>
                </li>
                <li className="main-nav-login">
                  <Link to={"/login"}>log in</Link>
                </li>
              </ul>
            }
          </div>
        </div>
        <div className="main-nav-bottom">
          <SearchBarContainer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainNav;
