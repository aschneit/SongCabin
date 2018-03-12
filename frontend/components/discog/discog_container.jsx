import React from "react";
import { connect } from "react-redux";
import Discog from "./discog";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const albums = Object.values(state.entities.albums) || [];
  return {
    albums
  };
};

export default withRouter(connect(msp)(Discog));
