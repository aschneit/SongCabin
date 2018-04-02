import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import currentTrackReducer from "./current_track_reducer";

export default combineReducers({
  currentTrack: currentTrackReducer,
  modal: modalReducer,

});
