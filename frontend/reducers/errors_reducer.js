import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer.js';
import artistErrorsReducer from './artist_errors_reducer.js';
import albumErrorsReducer from './album_errors_reducer.js';

export default combineReducers({session: sessionErrorsReducer, artist: artistErrorsReducer, album: albumErrorsReducer});
