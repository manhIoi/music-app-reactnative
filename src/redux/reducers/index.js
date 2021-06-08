import userReducers from './userReducers';
import loadingReducer from './loadingReducer';
import myFavoriteReducer from './myFavoriteReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: userReducers,
  loading: loadingReducer,
  myFavorite: myFavoriteReducer,
});

export default rootReducer;
