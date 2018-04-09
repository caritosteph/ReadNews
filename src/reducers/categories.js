import { ALL_CATEGORIES } from '../actions/constantTypes';

const initialState = {
  categories: []
}

function categories(state = initialState, action) {
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
