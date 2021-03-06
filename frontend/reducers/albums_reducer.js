import merge from "lodash/merge";

import { RECEIVE_ARTIST } from "../actions/artist_actions";
import { RECEIVE_ALBUM } from "../actions/album_actions";
import { RECEIVE_ALBUMS } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, state, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, { [action.album.id]: action.album });
    case RECEIVE_ALBUMS:
      return merge({}, state, action.albums);
    default:
      return state;
  }
};

export default albumsReducer;
