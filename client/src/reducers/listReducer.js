const initialUserState = {
  arr: []
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case 'LIST_ARTICLES':
      return {
        ...state,
        arr: action.payload
      };
    default:
      return state;
  }
};
