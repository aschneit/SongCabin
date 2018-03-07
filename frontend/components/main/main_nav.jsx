import React from 'react';
import { Link } from 'react-router-dom';



  const loggedOutLinks = () => {
    return (
      <ul className = "main-nav-session-buttons">
        <li className = "main-nav-signup"><Link to={'/signup'}>sign up</Link></li>
        <li className = "main-nav-login"><Link to={'/login'}>log in</Link></li>
      </ul>
    );
  };

  const loggedInLinks = (logout) => {
    return (
      <ul className = "main-nav-session-buttons">
        <li className = "main-nav-logout"><Link onClick={() => logout}>log out</Link></li>
      </ul>
    );
  };

  const MainNav = ({currentUser, logout}) => {
    let links;
    if (currentUser) {
      links = loggedInLinks(logout);
    } else {
      links = loggedOutLinks();
    }
  return (
  <div className = "main-nav">
    <div className = "main-nav-left">
      <div className = "main-logo">
        <Link to={'/'}>songcabin</Link>
      </div>
    </div>
    <div className = "main-nav-right">
        <div className = "main-nav-right-top"></div>
        <div className = "main-nav-right-bottom">{links}</div>
    </div>
  </div>
  );
};

export default MainNav;
