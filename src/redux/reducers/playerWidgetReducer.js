import {playerWidgetTypes} from '../types';

const playerWidgetReducer = (
  state = {isShow: false, currentSong: {}, detailSong: {}},
  action,
) => {
  switch (action.type) {
    case playerWidgetTypes.SHOW_PLAYER_WIDGET:
      return {
        ...state,
        isShow: true,
      };

    case playerWidgetTypes.HIDE_PLAYER_WIDGET:
      return {
        ...state,
        isShow: false,
      };
    case playerWidgetTypes.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case playerWidgetTypes.SET_DETAILS_SONG:
      return {
        ...state,
        detailSong: {
          ...state.detailSong,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default playerWidgetReducer;
