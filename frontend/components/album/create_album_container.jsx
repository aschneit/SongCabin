import React from 'react';
import { connect } from 'react-redux';
import CreateAlbumForm from './create_album_form';
import { clearErrors, createAlbum } from '../../actions/album_actions';
import { createTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.album
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (formData) => dispatch(createAlbum(formData)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    createTrack: (formData) => dispatch(createTrack(formData))

  };
};

export default connect(msp, mdp)(CreateAlbumForm);
