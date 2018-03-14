import React from 'react';
import { connect } from 'react-redux';
import TrackUpload from './track_upload';
import { withRouter } from 'react-router-dom';
import { receiveTrackData } from '../../actions/track_actions';



const mdp = (dispatch) => {
  return {
    receiveTrackData: (track) => dispatch(receiveTrackData(track))
  };
};

export default connect(null, mdp)(TrackUpload);
