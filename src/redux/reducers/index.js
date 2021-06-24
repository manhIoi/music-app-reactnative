import userReducers from './userReducers';
import loadingReducer from './loadingReducer';
import myFavoriteReducer from './myFavoriteReducer';
import playerWidgetReducer from './playerWidgetReducer';
import listTrackReducer from './listTrackReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: userReducers,
  loading: loadingReducer,
  myFavorite: myFavoriteReducer,
  playerWidget: playerWidgetReducer,
  listTrack: listTrackReducer,
});

export default rootReducer;
