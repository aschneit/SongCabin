import usersReducer from "./users_reducer";
import albumsReducer from "./albums_reducer";
import tracksReducer from "./tracks_reducer";
import { combineReducers } from "redux";

export default combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  tracks: tracksReducer
});
