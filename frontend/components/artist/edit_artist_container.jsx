import React from 'react';
import { connect } from 'react-redux';
import EditArtistForm from './edit_artist_form';
import { clearErrors, updateArtist } from '../../actions/artist_actions';

const msp = (state) => {
  return {
    errors: state.errors.artist
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(updateArtist(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(msp, mdp)(EditArtistForm);
