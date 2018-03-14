import merge from "lodash/merge";

import { RECEIVE_TRACK_DATA } from "../actions/track_actions";

const trackDataReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_DATA:
      return merge({}, state, {[action.track.order]: action.track});
    default:
      return state;
  }
};

export default trackDataReducer;
