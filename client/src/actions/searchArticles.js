export const searchArticles = search_term => dispatch => {
  dispatch({
    type: 'SEARCH_ARTICLES',
    payload: search_term
  });
};
