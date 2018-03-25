import { ALL_POST, SORT_POST} from '../actions/constantTypes';

function posts(state = {}, action) {
  const posts = action.posts;

  switch (action.type) {
    case ALL_POST:
      return {
        ...state,
        posts
      };
    case SORT_POST:
      return {
        ...state,
        sortby: action.sortby
      }
    default:
      return state;
  }
}

export default posts;
