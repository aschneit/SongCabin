import React from "react";
import { connect } from "react-redux";
import { getArtist } from "../../actions/artist_actions";
import ArtistPage from "./artist_page";
import { withRouter } from 'react-router-dom';



const msp = (state, ownProps) => {
  const artistId = ownProps.match.params.artistId;
  const artist = state.entities.users[artistId] || {};
  const albums = Object.values(state.entities.albums).filter(album => {
    return album.artist_id == artistId;
  })
  const trackIds = albums.map(album => album.track_ids).flat();
  const tracks = Object.values(state.entities.tracks).filter(track => {
    return trackIds.includes(track.id);
  })
  return {
    artist,
    albums,
    tracks
  };
};

const mdp = dispatch => {
  return {
    getArtist: id => dispatch(getArtist(id))
  };
};

export default withRouter(connect(msp, mdp)(ArtistPage));
