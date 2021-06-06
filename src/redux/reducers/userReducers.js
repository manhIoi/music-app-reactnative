import {userTypes} from '../types';

const userReducers = (state = {}, action) => {
  switch (action.tupe) {
    case userTypes.LOGIN:
      return action.payload;

    default:
      return state;
  }
};

export default userReducers;
