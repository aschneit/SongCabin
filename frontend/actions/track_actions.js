
export const RECEIVE_TRACK_DATA = "RECEIVE_TRACK_DATA";
export const SEND_CURRENT_TRACK = "SEND_CURRENT_TRACK";

export const receiveTrackData = track => {
  return {
    type: RECEIVE_TRACK_DATA,
    track
  };
};

export const sendCurrentTrack = track => {
  return {
    type: SEND_CURRENT_TRACK,
    track
  };
};

export const prepareTrackData = track => (dispatch) => {
   return dispatch(receiveTrackData(track));
   };
