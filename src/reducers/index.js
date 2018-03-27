import { combineReducers } from  'redux';
import posts from './posts';
import categories from './categories';

const reducers = combineReducers({
  posts,
  categories
});

export default reducers;
