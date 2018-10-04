import axios from 'axios';

export default {
  searchArticles: function(searchTerm) {
    return axios.get(
      `http://hn.algolia.com/api/v1/search?tags=story&query=${searchTerm}`
    );
  }
};
