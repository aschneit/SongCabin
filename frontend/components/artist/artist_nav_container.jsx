import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import ArtistNav from "./artist_nav";

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(msp, mdp)(ArtistNav);
