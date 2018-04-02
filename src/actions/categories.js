import { ALL_CATEGORIES } from './constantTypes';
import { getCategories } from '../utils/api';

const allCategories = (categories) =>  ({
  type: ALL_CATEGORIES,
  categories
});

export const fetchAllCategories = () => dispatch => {
    return getCategories()
      .then( categories =>  dispatch(allCategories(categories)));
};
