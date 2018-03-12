import * as APIUtil from "../util/album_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

export const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

export const getAlbumTracks = id => dispatch => {
  return APIUtil.getAlbumTracks(id).then(tracks => {
    dispatch(receiveTracks(tracks));
  });
};
