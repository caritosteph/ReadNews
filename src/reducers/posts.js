import { ALL_POST, SORT_POST, ADD_POST, 
         DELETE_POST, VOTE_POST, UPDATE_POST } from '../actions/constantTypes';

const initialState = {
  sortby: "-timestamp"
}

function posts(state = initialState, action) {
  const { posts, sortby, post, postId, newPost } = action;

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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === postId ? {...post,  deleted: true } : post)
      }
    case VOTE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === newPost.id ? {...post,  voteScore: newPost.voteScore } : post)
      } 
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === newPost.id ? newPost : post)
      }  
    default:
      return state;
  }
}

export default posts;
