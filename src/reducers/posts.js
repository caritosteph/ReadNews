import { ALL_POST, SORT_POST} from '../actions/constantTypes';

const initialState = {
  sortby: "-timestamp"
}

function posts(state = initialState, action) {
  const { posts, sortby } = action;

  switch (action.type) {
    case ALL_POST:
      return {
        ...state,
        posts
      };
    case SORT_POST:
      return {
        ...state,
        sortby
      }
    default:
      return state;
  }
}

export default posts;
