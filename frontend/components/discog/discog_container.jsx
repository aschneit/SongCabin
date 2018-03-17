import React from "react";
import { connect } from "react-redux";
import Discog from "./discog";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const artist = state.entities.users[ownProps.match.params.artistId] || {};
  let albums;
  if (!artist.album_ids) {
    albums = [];
  } else {
    albums = artist.album_ids.map((id) => {
      return state.entities.albums[id];
    });
  }
    // const albums = Object.values(state.entities.albums) || [];
  return {
    artist,
    albums
  };
};

export default withRouter(connect(msp, null)(Discog));
