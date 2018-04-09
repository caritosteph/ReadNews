import { ALL_COMMENTS } from './constantTypes';
import { getAllComments } from '../utils/api';

const allComments = (comments) =>  ({
  type: ALL_COMMENTS,
  comments
});

export const fetchAllComments = (id) => dispatch => {
    return getAllComments(id)
      .then( comments =>  dispatch(allComments(comments)));
};
