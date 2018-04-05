import * as APIUtil from "../util/album_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const CLEAR_ALBUM_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

export const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  };
};

export const clearErrors = errors => dispatch => {
  return dispatch({ type: CLEAR_ALBUM_ERRORS, errors });
};

export const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const receiveAlbumErrors = errors => {

  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  };
};

export const fetchAlbums = (query) => (dispatch, getState) => {
  return APIUtil.getAlbums(query).then(albums => {
    dispatch(receiveAlbums(albums));
  });
};

export const getAlbumTracks = id => (dispatch, getState) => {
  return APIUtil.getAlbumTracks(id).then(tracks => {
    dispatch(receiveTracks(tracks));
  });
};

export const createAlbum = formData => (dispatch) => {
  return APIUtil.createAlbum(formData).then(album => {
    dispatch(receiveAlbum(album));
  }, errors => {
    dispatch(receiveAlbumErrors(errors.responseJSON));
  }
  );
};
