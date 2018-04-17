import { ALL_COMMENTS, ADD_COMMENT } from '../actions/constantTypes';

const initialState = {
  comments: []
}

function comments(state = initialState, action) {
  const { comments, comment } = action;

  switch (action.type) {
    case ALL_COMMENTS:
      return {
        ...state,
        comments
      };
    case ADD_COMMENT:
    return {
      ...state,
      comments: [
        comment,
        ...state.comments
      ]
    }
    default:
      return state;
  }
}

export default comments;
