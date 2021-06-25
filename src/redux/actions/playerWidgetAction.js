import {playerWidgetTypes} from '../types';
import TrackPlayer from 'react-native-track-player';

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

const setPlaySong = () => {
  return {
    type: playerWidgetTypes.PLAY_SONG,
  };
};

const setPauseSong = () => {
  return {
    type: playerWidgetTypes.PAUSE_SONG,
  };
};
export {
  showPlayerWidget,
  hidePlayerWidget,
  setCurrentSong,
  setDetailsSong,
  setPlaySong,
  setPauseSong,
};
