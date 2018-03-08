import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
     (cUser) => { dispatch(receiveCurrentUser(cUser));},
     (errors) => { dispatch(receiveSessionErrors(errors.responseJSON));}
  );
};


export const clearErrors = (errors) => (dispatch) => {
    return dispatch({type: CLEAR_ERRORS, errors});
  };




export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then( (cUser) => {
    dispatch(receiveCurrentUser(cUser));},
    (errors) => { dispatch(receiveSessionErrors(errors.responseJSON));}
  );
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logout = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const logoutUser = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logout()));
};
