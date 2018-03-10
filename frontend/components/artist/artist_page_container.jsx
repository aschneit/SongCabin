import React from "react";
import { connect } from "react-redux";
import { getArtist } from "../../actions/artist_actions";
import ArtistPage from "./artist_page";
import { withRouter } from 'react-router-dom';



const msp = (state, ownProps) => {
  const artist = state.entities.users[ownProps.match.params.artistId] || {};
  return {
    artist
  };
};

const mdp = dispatch => {
  return {
    getArtist: id => dispatch(getArtist(id))
  };
};

export default withRouter(connect(msp, mdp)(ArtistPage));
