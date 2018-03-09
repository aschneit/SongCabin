import React from "react";
import { connect } from "react-redux";
import { AlbumShow } from "./album_show";

const msp = (state, ownProps) => {
  return {
    artist: state.entities.users[ownProps.match.params.id],
    album: state.entities.albums[ownProps.match.params.id].most_recent_album,
    tracks:
  };
} ;

export default connect(msp, mdp)(AlbumShow);
