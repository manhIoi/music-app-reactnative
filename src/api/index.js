import {getAllSuggestion} from './suggesttion';
import {getAlbumBySuggestion} from './album';
import {getSongByAlbum} from './song';

const rootApi = {
  getAllSuggestion,
  getAlbumBySuggestion,
  getSongByAlbum,
};

export default rootApi;
