import { ALL_COMMENTS } from '../actions/constantTypes';

function comments(state = {}, action) {
  const { comments } = action;

  switch (action.type) {
    case ALL_COMMENTS:
      return {
        ...state,
        comments
      };
    default:
      return state;
  }
}

export default comments;
