import React from 'react';
import MainNavContainer from './main_nav_container';


export default class MainPage extends React.Component {


  render () {
    return (
    <div className="main-photo-block">
      <div className="main-large-photo"><img src={chris}/></div>
      <ul className="main-small-photos">
        <li><img src={bill}/></li>
        <li><img src={charlie}/></li>
        <li><img src={dewey}/></li>
      </ul>
    </div>
  );
  }
}
