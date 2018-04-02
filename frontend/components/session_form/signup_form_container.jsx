import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import {closeModal, openModal} from '../../actions/modal_actions';


const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    modal: state.ui.modal
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: (errors) => dispatch(clearErrors(errors)),
    otherForm: (
     <button onClick={() => dispatch(openModal('login'))}>
       Log in.
     </button>
   ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
