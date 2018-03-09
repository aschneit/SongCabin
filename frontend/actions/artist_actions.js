import * as APIUtil from "../util/artist_api_util";

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    artist: payload.user,
    albums: payload.albums,
    tracks: payload.tracks
  };
};

export const getArtist = id => dispatch => {
  return APIUtil.getArtist(id).then(payload => {
    dispatch(receiveArtist(payload));
  });
};
