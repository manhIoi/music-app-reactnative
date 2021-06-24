import {getAllSuggestion} from './suggesttion';
import {getAlbumBySuggestion} from './album';
import {getSongByAlbum} from './song';
import {login, register} from './user';
import {
  fetchMyFavorite,
  createMyFavorite,
  addToMyFavorite,
  removeFromMyFavorite,
} from './myFavorite';

const rootApi = {
  getAllSuggestion,
  getAlbumBySuggestion,
  getSongByAlbum,
  login,
  register,
  fetchMyFavorite,
  createMyFavorite,
  addToMyFavorite,
  removeFromMyFavorite,
};

export default rootApi;
