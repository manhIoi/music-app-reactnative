import {listTrackTypes} from '../types';

const setListTrack = listTrack => {
  console.log('this is listrack action', listTrack);
  return {
    type: listTrackTypes.SET_LIST_TRACK,
    payload: listTrack,
  };
};

const showModalListTrack = () => {
  return {
    type: listTrackTypes.SHOW_MODAL_LIST_TRACK,
  };
};

const hideModalListTrack = () => {
  return {
    type: listTrackTypes.HIDE_MODAL_LIST_TRACK,
  };
};

export {setListTrack, showModalListTrack, hideModalListTrack};
