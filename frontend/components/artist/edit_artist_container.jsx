import React from 'react';
import { connect } from 'react-redux';
import EditArtistForm from './edit_artist_form';
import { clearErrors, updateArtist } from '../../actions/artist_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.artist,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (artist) => dispatch(updateArtist(artist)),
    clearErrors: (errors) => dispatch(clearErrors(errors))

  };
};

export default connect(msp, mdp)(EditArtistForm);
