import {userTypes} from '../types';

const userReducers = (state = {}, action) => {
  switch (action.type) {
    case userTypes.LOGIN:
      return action.payload;
    case userTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default userReducers;
