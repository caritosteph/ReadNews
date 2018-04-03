import { ALL_COMMENTS } from './constantTypes';
import { getAllComments } from '../utils/api';

const allComments = (comments) =>  ({
  type: ALL_CATEGORIES,
  comments
});

export const fetchAllCategories = (id) => dispatch => {
    return getAllComments(id)
      .then( comments =>  dispatch(allComments(comments)));
};
