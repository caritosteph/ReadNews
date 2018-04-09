import { ALL_COMMENTS } from '../actions/constantTypes';

const initialState = {
  comments: []
}

function comments(state = initialState, action) {
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
