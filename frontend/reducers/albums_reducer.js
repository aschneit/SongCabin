import merge from "lodash/merge";

import { RECEIVE_ARTIST } from "../actions/artist_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.albums);
    default:
      return state;
  }
};

export default albumsReducer;
