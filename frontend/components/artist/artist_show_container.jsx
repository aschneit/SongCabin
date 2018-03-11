import React from "react";
import { connect } from "react-redux";
import ArtistShow from "./artist_show";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const artist = state.entities.users[ownProps.match.params.artistId] || {};
  return {
    artist
  };
};

export default withRouter(connect(msp)(ArtistShow));
