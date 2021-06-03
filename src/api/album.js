import {enpointService} from '../constants/url';
import callApi from '../utils/callApi';

const getAlbumBySuggestion = async idSuggestion => {
  try {
    const body = await callApi(
      'get',
      `${enpointService}/albums/getByIdSuggestion/${idSuggestion}`,
    );
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

export {getAlbumBySuggestion};
