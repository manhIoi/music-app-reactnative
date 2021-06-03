import {enpointService} from '../constants/url';
import callApi from '../utils/callApi';

const getSongByAlbum = async idAlbum => {
  try {
    const body = await callApi(
      'get',
      `${enpointService}/songs/getSongsByIdAlbum/${idAlbum}`,
    );
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

export {getSongByAlbum};
