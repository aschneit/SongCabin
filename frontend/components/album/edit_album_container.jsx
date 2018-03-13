import React from 'react';
import { connect } from 'react-redux';
import EditAlbumForm from './edit_album_form';
import { clearErrors, updateAlbum } from '../../actions/artist_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.album
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (album, formData) => dispatch(updateAlbum(album, formData)),
    clearErrors: (errors) => dispatch(clearErrors(errors))

  };
};

export default connect(msp, mdp)(EditAlbumForm);
