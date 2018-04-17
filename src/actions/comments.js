import { ALL_COMMENTS, ADD_COMMENT } from './constantTypes';
import { getAllComments, createNewComment } from '../utils/api';

const allComments = (comments) =>  ({
  type: ALL_COMMENTS,
  comments
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const fetchAllComments = (id) => dispatch => {
    return getAllComments(id)
      .then( comments =>  dispatch(allComments(comments)));
};

export const fetchNewComment = (comment) => dispatch => {
  return createNewComment(comment)
      .then( comment => dispatch(addComment(comment)));
};
