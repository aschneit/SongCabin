import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/session_actions";
import MainNav from "./main_nav";
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(MainNav);
