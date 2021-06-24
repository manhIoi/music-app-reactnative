import {listTrackTypes} from '../types';

const listTrackReducer = (
  state = {listSong: [], songSelected: {}, isShowModal: false},
  action,
) => {
  switch (action.type) {
    case listTrackTypes.SET_LIST_TRACK:
      console.log({
        ...state,
        listSong: [...action.payload.listSong],
        songSelected: {
          ...action.payload.songSelected,
        },
      });
      return {
        ...state,
        listSong: [...action.payload.listSong],
        songSelected: {
          ...action.payload.songSelected,
        },
      };
    case listTrackTypes.SHOW_MODAL_LIST_TRACK:
      return {
        ...state,
        isShowModal: true,
      };
    case listTrackTypes.HIDE_MODAL_LIST_TRACK:
      return {
        ...state,
        isShowModal: false,
      };
    default:
      return state;
  }
};

export default listTrackReducer;
