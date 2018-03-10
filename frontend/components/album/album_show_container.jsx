import React from "react";
import { connect } from "react-redux";
import AlbumShow from "./album_show";

const msp = (state, ownProps) => {
  const artist = state.entities.users[ownProps.match.params.artistId] || {};
  const album = state.entities.albums[ownProps.match.params.albumId] || {};

  if (!album.track_ids) {
   album.track_ids = [];
  }
  const tracks = album.track_ids.map(id => {
    return state.entities.tracks[id];
  });

  return {
    artist, album, tracks
  };
} ;

export default connect(msp)(AlbumShow);
