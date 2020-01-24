import React from "react";
import { connect } from "react-redux";
import SongPlayer from "./song_player";
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
  const currentTrack = state.ui.currentTrack || {};
  const leadTrack = ownProps.tracks.find((track) => {
    return track.order === 1;
  });
  return {
   currentTrack, leadTrack
  };
};



export default withRouter(connect(msp, null)(SongPlayer));
