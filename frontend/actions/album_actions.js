import * as APIUtil from "../util/album_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

export const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const getAlbumTracks = id => (dispatch, getState) => {
  return APIUtil.getAlbumTracks(id).then(tracks => {
    dispatch(receiveTracks(tracks));
  });
};

export const createAlbum = formData => (dispatch) => {
  return APIUtil.createAlbum(formData).then(album => {
    dispatch(receiveAlbum(album));
  });
};
