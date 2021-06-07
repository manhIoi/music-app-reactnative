import {loadingTypes} from '../types';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case loadingTypes.IN_PROGRESS:
      state = false;
      return state;
    case loadingTypes.DONE:
      state = true;
      return state;
    default:
      return state;
  }
};

export default loadingReducer;
