import merge from "lodash/merge";

import { SEND_CURRENT_TRACK } from "../actions/track_actions";


const currentTrackReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SEND_CURRENT_TRACK:
      return merge({}, state, action.track);
    default:
      return state;
  }
};

export default currentTrackReducer;
