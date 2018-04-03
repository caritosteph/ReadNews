import { ALL_POST, SORT_POST, ADD_POST, POST_DETAIL } from '../actions/constantTypes';

const initialState = {
  sortby: "-timestamp"
}

function posts(state = initialState, action) {
  const { posts, sortby, post } = action;

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
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          post
        ]
      }
    case POST_DETAIL:
    return {
      ...state,
      //posts: [
      //  ...state.posts,
      //  post
      //]
    }
    default:
      return state;
  }
}

export default posts;
