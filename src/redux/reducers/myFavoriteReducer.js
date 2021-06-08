import {myFavoriteTypes} from '../types';

const myFavoriteReducer = (state = {}, action) => {
  switch (action.type) {
    case myFavoriteTypes.FETCH_MY_FAVORITE:
      console.log(action.payload);
      return action.payload;
    case myFavoriteTypes.ADD_TO_MY_FAVORITE:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default myFavoriteReducer;
