import React from 'react';
import { Link } from 'react-router-dom';

const SessionNav = () => {
  return (
  <div className = "session-nav">
      <div className = "session-logo">
        <Link to={'/'}>songcabin</Link>
      </div>
  </div>
  );
};

export default SessionNav;
