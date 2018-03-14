import * as APIUtil from "../util/track_api_util";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_DATA = "RECEIVE_TRACK_DATA";


export const createTrack = formData => (dispatch) => {
  return APIUtil.createTrack(formData).then(track => {
    dispatch(receiveTrack(track));
  });
};

export const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

export const prepareTrackData = track => (dispatch) => {
   return dispatch(receiveTrackData(track));
   };


export const receiveTrackData = track => {
  return {
    type: RECEIVE_TRACK_DATA,
    track
  };
};
