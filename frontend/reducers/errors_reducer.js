import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer.js';

export default combineReducers({session: sessionErrorsReducer});
