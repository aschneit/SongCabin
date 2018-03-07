import usersReducer from './users_reducer';
import { combineReducers } from 'redux';

export default combineReducers ({users: usersReducer});
