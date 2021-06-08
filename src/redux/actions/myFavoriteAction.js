import rootApi from '../../api';
import {myFavoriteTypes} from '../types';

const fetchMyFavorite = idUser => async dispatch => {
  try {
    const body = await rootApi.fetchMyFavorite(idUser);
    console.log(body);

    return dispatch({
      type: myFavoriteTypes.FETCH_MY_FAVORITE,
      payload: body,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addToMyFavorite = (idUser, newSong) => async dispatch => {
  try {
    const body = await rootApi.addToMyFavorite(idUser, newSong);
    if (!body._idUser) {
      return body;
    }
    return dispatch({
      type: myFavoriteTypes.ADD_TO_MY_FAVORITE,
      payload: body,
    });
  } catch (error) {}
};

export {fetchMyFavorite, addToMyFavorite};
