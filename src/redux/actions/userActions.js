import {userTypes} from '../types';
import {login} from '../../api/index';

const loginAction = (email, password) => async dispatch => {
  try {
    const body = await login(email, password);
    console.log(body);

    return dispatch({
      type: userTypes.LOGIN,
      payload: body,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export {loginAction};
