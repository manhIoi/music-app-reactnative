import userReducers from './userReducers';
import loadingReducer from './loadingReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: userReducers,
  loading: loadingReducer,
});

export default rootReducer;
