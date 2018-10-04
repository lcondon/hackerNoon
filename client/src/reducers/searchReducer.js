const initialUserState = {
  arr: []
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case 'SEARCH_ARTICLES':
      return {
        ...state,
        arr: state.arr.concat(action.payload)
      };
    default:
      return state;
  }
};
