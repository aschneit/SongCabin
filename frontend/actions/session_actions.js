import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
     (cUser) => { dispatch(receiveCurrentUser(cUser));},
     (errors) => { dispatch(receiveSessionErrors(errors.responseJSON));}
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then(() => {
    dispatch(receiveCurrentUser(null));
  });
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
