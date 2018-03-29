import React from "react";
import { connect } from "react-redux";
import SearchBar from './search_bar';
import { fetchAlbums } from "../../actions/album_actions";

const msp = state => {
  const albums= Object.values(state.entities.albums) || {};
  return {
    albums
  };
};

const mdp = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums())
  };
};

export default connect(msp, mdp)(MainPage);
