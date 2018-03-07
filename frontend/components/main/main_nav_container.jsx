import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainNav from './main_nav';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout)
  };
};

export default connect(msp, mdp)(MainNav);
