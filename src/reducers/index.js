import { combineReducers } from  'redux';
import posts from './posts';
import categories from './categories';
import comments from './comments';

const reducers = combineReducers({
  posts,
  categories,
  comments
});

export default reducers;
