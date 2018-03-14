import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import trackDataReducer from './track_data_reducer';

export default combineReducers({session: sessionReducer, errors: errorsReducer, entities: entitiesReducer, trackData: trackDataReducer});
