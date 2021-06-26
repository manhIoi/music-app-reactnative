import rootApi from '../../api';
import {myFavoriteTypes} from '../types';

const fetchMyFavorite = idUser => async dispatch => {
  try {
    const body = await rootApi.fetchMyFavorite(idUser);

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
  } catch (error) {
    console.log(error);
  }
};

const removeFromMyFavorite = (idUser, idSong) => async dispatch => {
  try {
    const body = await rootApi.removeFromMyFavorite(idUser, idSong);
    if (!body._idUser) {
      return body;
    }
    return dispatch({
      type: myFavoriteTypes.REMOVE_FROM_MY_FAVORITE,
      payload: body,
    });
  } catch (error) {
    console.log(error);
  }
};

export {fetchMyFavorite, addToMyFavorite, removeFromMyFavorite};
