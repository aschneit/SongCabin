import React from "react";
import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { getAlbumTracks } from "../../actions/album_actions";
import { withRouter } from 'react-router-dom';
import { sendCurrentTrack } from "../../actions/track_actions";

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const currentTrack = state.ui.currentTrack || {};

  return {
    currentUser, currentTrack
  };
} ;

const mdp = (dispatch) => {
  return {
    sendCurrentTrack: (track) => dispatch(sendCurrentTrack(track))
  };
};

export default withRouter(connect(msp, mdp)(AlbumShow));
