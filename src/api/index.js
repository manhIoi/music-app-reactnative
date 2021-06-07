import {getAllSuggestion} from './suggesttion';
import {getAlbumBySuggestion} from './album';
import {getSongByAlbum} from './song';
import {login, register} from './user';

const rootApi = {
  getAllSuggestion,
  getAlbumBySuggestion,
  getSongByAlbum,
  login,
  register,
};

export default rootApi;
