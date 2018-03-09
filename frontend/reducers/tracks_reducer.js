import merge from "lodash/merge";

import { RECEIVE_ARTIST } from "../actions/artist_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.tracks);
    default:
      return state;
  }
};

export default tracksReducer;
