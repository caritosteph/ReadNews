import { ALL_COMMENTS, ADD_COMMENT, UPDATE_COMMENT } from './constantTypes';
import { getAllComments, createNewComment, voteComment, deleteComment, updateComment } from '../utils/api';

const allComments = (comments) =>  ({
  type: ALL_COMMENTS,
  comments
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

const editComment = (comment) => ({
  type: UPDATE_COMMENT,
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

export const fetchVoteComment = (commentId, voteType) => dispatch => {
  return voteComment(commentId, voteType)
      .then( comment => dispatch(editComment(comment)));
};

export const fetchDeleteComment = (commentId) => dispatch => {
  return deleteComment(commentId)
      .then( comment => dispatch(editComment(comment)));
};

export const fetchUpdatePost = (commentId, values) => dispatch => {
  return updateComment(commentId, values)
      .then( comment => dispatch(editComment(comment)));
};