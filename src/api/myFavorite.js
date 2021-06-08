import {enpointService} from '../constants/url';
import callApi from '../utils/callApi';

const fetchMyFavorite = async idUser => {
  try {
    const body = await callApi(
      'get',
      `${enpointService}/myFavorite/getOne/${idUser}`,
    );
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const createMyFavorite = async idUser => {
  try {
    const body = await callApi(
      'post',
      `${enpointService}/myFavorite/create/${idUser}`,
    );
    console.log(body);
    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

const addToMyFavorite = async (idUser, newSong) => {
  try {
    const body = await callApi(
      'put',
      `${enpointService}/myFavorite/update/addToMyFavorite/${idUser}`,
      newSong,
    );

    return body.data;
  } catch (error) {
    console.log(error, 'from api');
  }
};

export {fetchMyFavorite, createMyFavorite, addToMyFavorite};
