const userTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
};

const loadingTypes = {
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

const myFavoriteTypes = {
  FETCH_MY_FAVORITE: 'FETCH_MY_FAVORITE',
  ADD_TO_MY_FAVORITE: 'ADD_TO_MY_FAVORITE',
  REMOVE_FROM_MY_FAVORITE: 'ADD_TO_MY_FAVORITE',
};

const playerWidgetTypes = {
  SHOW_PLAYER_WIDGET: 'SHOW_PLAYER_WIDGET',
  HIDE_PLAYER_WIDGET: 'HIDE_PLAYER_WIDGET',
  SET_CURRENT_SONG: 'SET_CURRENT_SONG',
  SET_DETAILS_SONG: 'SET_DETAILS_SONG',
};

const listTrackTypes = {
  SET_LIST_TRACK: 'SET_LIST_TRACK',
  SHOW_MODAL_LIST_TRACK: 'SHOW_MODAL_LIST_TRACK',
  HIDE_MODAL_LIST_TRACK: 'HIDE_MODAL_LIST_TRACK',
};

export {
  userTypes,
  loadingTypes,
  myFavoriteTypes,
  playerWidgetTypes,
  listTrackTypes,
};
