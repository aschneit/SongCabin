import React from "react";
import { connect } from "react-redux";
import AlbumShow from "./album_show";
import { getAlbumTracks } from "../../actions/album_actions";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const artist = state.entities.users[ownProps.match.params.artistId] || {};
  const album = state.entities.albums[ownProps.match.params.albumId] || {};

  // let album;
  // if (ownProps.match.params.albumId) {
  //   album = state.entities.albums[ownProps.match.params.albumId] || {};
  // } else {
  //   album = state.entities.albums[artist.most_recent_album] || {};
  // }


  // if (!album.track_ids) {
  //  album.track_ids = [];
  // }
  // const tracks = album.track_ids.map(id => {
  //   return state.entities.tracks[id];
  // });

  const tracks = Object.values(state.entities.tracks).filter(track => {
    return track.album_id === album.id;
  }) || {};


  return {
    artist, album, tracks, currentUser
  };
} ;

const mdp = (dispatch) => {
  return {
    getAlbumTracks: id => dispatch(getAlbumTracks(id))
  };
};

export default withRouter(connect(msp, mdp)(AlbumShow));
