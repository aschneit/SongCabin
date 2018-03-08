import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(msp, mdp)(SessionForm);
