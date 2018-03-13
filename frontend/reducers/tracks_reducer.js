import merge from "lodash/merge";

import { RECEIVE_ARTIST } from "../actions/artist_actions";
import { RECEIVE_TRACKS } from "../actions/album_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.tracks);
    case RECEIVE_TRACKS:
      return merge({}, state, action.tracks);
    case RECEIVE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    default:
      return state;
  }
};

export default tracksReducer;
