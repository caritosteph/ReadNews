import { ALL_POST } from '../actions/constantTypes';

function posts(state = [], action) {
  switch (action.type) {
    case ALL_POST:
      const posts = action.posts;
      return {
        ...state,
        ...posts
      };
    default:
      return state;
  }
}

export default posts;
