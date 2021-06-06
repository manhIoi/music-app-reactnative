import {enpointService} from '../constants/url';
import callApi from '../utils/callApi';

const login = async (email, password) => {
  try {
    const body = await callApi('get', `${enpointService}/users/login`, {
      email,
      password,
    });
    console.log(body);
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

export {login};
