import React from "react";
import { connect } from "react-redux";
import SongPlayer from "./song_player";
import { withRouter } from 'react-router-dom';


const msp = (state) => {
  const currentTrack = state.ui.currentTrack || {};
  return {
   currentTrack
  };
};



export default withRouter(connect(msp, null)(SongPlayer));
