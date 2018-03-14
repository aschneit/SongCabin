import React from 'react';
import { connect } from 'react-redux';
import TrackUpload from './track_upload';
import { withRouter } from 'react-router-dom';
import { prepareTrackData } from '../../actions/track_actions';



const mdp = (dispatch) => {
  return {
    prepareTrackData: (track) => dispatch(prepareTrackData(track))
  };
};

export default connect(mdp)(TrackUpload);
