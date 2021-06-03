import {enpointService} from '../constants/url';
import callApi from '../utils/callApi';

const getAllSuggestion = async () => {
  try {
    const body = await callApi('get', `${enpointService}/suggestions`);
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

export {getAllSuggestion};
