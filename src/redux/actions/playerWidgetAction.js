import {playerWidgetTypes} from '../types';

const showPlayerWidget = () => {
  return {
    type: playerWidgetTypes.SHOW_PLAYER_WIDGET,
  };
};

const hidePlayerWidget = () => {
  return {
    type: playerWidgetTypes.HIDE_PLAYER_WIDGET,
  };
};

const setCurrentSong = song => {
  return {
    type: playerWidgetTypes.SET_CURRENT_SONG,
    payload: song,
  };
};

const setDetailsSong = details => {
  return {
    type: playerWidgetTypes.SET_DETAILS_SONG,
    payload: details,
  };
};

export {showPlayerWidget, hidePlayerWidget, setCurrentSong, setDetailsSong};
