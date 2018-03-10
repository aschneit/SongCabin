import React from "react";
import { connect } from "react-redux";
import AlbumShow from "./album_show";

const msp = (state, ownProps) => {
  return {
    artist: state.entities.users[ownProps.match.params.artistId],
    album: state.entities.albums[ownProps.match.params.albumId]
  };
} ;

export default connect(msp)(AlbumShow);
