import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';



export default class Footer extends React.Component {
  render () {
    return (
    <div className="footer-main">
      <div className="footer-content">
        <div className="footer-name">
          <a href="http://www.aschneit.com" target="_blank">Adam Schneit</a>
        </div>
        <div className="footer-links">
          <span><a href="https://github.com/aschneit" target="_blank">
            <FontAwesomeIcon className="github-icon" icon={["fab", "github"]} /></a></span>
          <span><a href="https://www.linkedin.com/in/aschneit/" target="_blank">
            <FontAwesomeIcon className="linkedin-icon" icon={["fab", "linkedin"]} /></a></span>
          <span><a href="https://angel.co/adam-schneit" target="_blank">
            <FontAwesomeIcon className="angellist-icon" icon={["fab", "angellist"]} /></a></span>
        </div>
      </div>
    </div>
  );
  }
}
