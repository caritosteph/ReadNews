import { ALL_POST, SORT_POST, ADD_POST, UPDATE_POST } from '../actions/constantTypes';

const initialState = {
  sortby: "-timestamp"
}

function posts(state = initialState, action) {
  const { posts, sortby, post, postId } = action;

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
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(item => item.id === post.id ? post : item)
      }  
    default:
      return state;
  }
}

export default posts;
