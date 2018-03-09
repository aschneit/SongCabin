import React from "react";
import { connect } from "react-redux";
import { getArtist } from "../../actions/artist_actions";
import { ArtistPage } from "./artist_page";

const mdp = dispatch => {
  return {
    getArtist: id => dispatch(getArtist(id))
  };
};

export default connect(mdp)(ArtistPage);
