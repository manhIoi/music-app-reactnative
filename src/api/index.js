import {getAllSuggestion} from './suggesttion';
import {getAlbumBySuggestion} from './album';
import {getSongByAlbum} from './song';
import {login} from './user';

const rootApi = {
  getAllSuggestion,
  getAlbumBySuggestion,
  getSongByAlbum,
  login,
};

export default rootApi;
