import { combineReducers } from 'redux';
import listReducer from './listReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  list: listReducer
});

export default rootReducer;
