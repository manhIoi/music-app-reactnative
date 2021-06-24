import {userTypes} from '../types';
import rootApi from '../../api/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginAction = (email, password) => async dispatch => {
  try {
    const body = await rootApi.login(email, password);
    if (body?.authToken) {
      const payload = {
        ...body.emailAlready,
        authToken: body.authToken,
      };
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({...payload, password: password}),
      );
      return dispatch({
        type: userTypes.LOGIN,
        payload: payload,
      });
    } else {
      return body;
    }
  } catch (error) {
    console.log(error.message);
  }
};

const logoutAction = () => async dispatch => {
  try {
    await AsyncStorage.setItem('user', '');
    return dispatch({
      type: userTypes.LOGOUT,
    });
  } catch (error) {}
};

export {loginAction, logoutAction};
