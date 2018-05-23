import React from "react";
import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { getAlbumTracks } from "../../actions/album_actions";
import { withRouter } from 'react-router-dom';
import { sendCurrentTrack } from "../../actions/track_actions";

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const artist = state.entities.users[ownProps.match.params.artistId] || {};
  let album;
  if (ownProps.match.params.albumId) {
    album = state.entities.albums[ownProps.match.params.albumId] || {};
  } else if (artist.most_recent_album) {
    album = state.entities.albums[artist.most_recent_album] || {};
  } else {
    album = {};
  }

  const tracks = Object.values(state.entities.tracks).filter(track => {
    return track.album_id === album.id;
  }) || {};


  const currentTrack = state.ui.currentTrack || {};

  return {
    artist, album, tracks, currentUser, currentTrack
  };
} ;

const mdp = (dispatch) => {
  return {
    getAlbumTracks: id => dispatch(getAlbumTracks(id)),
    sendCurrentTrack: (track) => dispatch(sendCurrentTrack(track))
  };
};

export default withRouter(connect(msp, mdp)(AlbumShow));
