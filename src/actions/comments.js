import { ALL_COMMENTS, ADD_COMMENT, VOTE_COMMENT } from './constantTypes';
import { getAllComments, createNewComment, voteComment } from '../utils/api';

const allComments = (comments) =>  ({
  type: ALL_COMMENTS,
  comments
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

const voteScoreComment = (comment) => ({
  type: VOTE_COMMENT,
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
      .then( comment => dispatch(voteScoreComment(comment)));
};