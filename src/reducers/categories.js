import { ALL_CATEGORIES } from '../actions/constantTypes';

function categories(state = {}, action) {
  const { categories } = action;

  switch (action.type) {
    case ALL_CATEGORIES:
      return {
        ...state,
        categories
      };
    default:
      return state;
  }
}

export default categories;
