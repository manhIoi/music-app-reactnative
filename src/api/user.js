import {enpointService} from '../constants/url';
import callApi from '../utils/callApi';

const login = async (email, password) => {
  try {
    const body = await callApi('post', `${enpointService}/users/login`, {
      email,
      password,
    });
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const register = async newAccount => {
  try {
    const body = await callApi(
      'post',
      `${enpointService}/users/register`,
      newAccount,
    );
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

export {login, register};
