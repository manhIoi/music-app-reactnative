import {loadingTypes} from '../types';

const loadDone = () => {
  return {
    type: loadingTypes.DONE,
  };
};

const inProgressLoading = () => {
  return {
    type: loadingTypes.IN_PROGRESS,
  };
};

export {loadDone, inProgressLoading};
