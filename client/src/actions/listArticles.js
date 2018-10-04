export const listArticles = list => dispatch => {
  dispatch({
    type: 'LIST_ARTICLES',
    payload: list
  });
};
