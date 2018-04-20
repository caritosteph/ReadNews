import { ALL_POST , SORT_POST, ADD_POST, UPDATE_POST } from './constantTypes';
import { getAllPost, getPostByCategories, 
         createNewPost, deletePost, votePost, 
         updatePost } from '../utils/api';

const allPosts = (posts) =>  ({
  type: ALL_POST,
  posts
});

const addPost = (newPost) => ({
  type: ADD_POST,
  newPost
});

const editPost = (post) => ({
  type: UPDATE_POST,
  post
});

export const sortPost = (sortby) => ({
    type: SORT_POST,
    sortby
});

export const fetchAllPost = (category) => dispatch => {
  if(!category || category === "all" ) {
    return getAllPost()
      .then( posts => dispatch(allPosts(posts)));
  } else {
    return getPostByCategories(category)
      .then( posts => dispatch(allPosts(posts)));
  }
};

export const fetchNewPost = (post) => dispatch => {
  return createNewPost(post)
      .then( newPost => dispatch(addPost(newPost)));
};

export const fetchDeletePost = (postId) => dispatch => {
  return deletePost(postId)
      .then( post => dispatch(editPost(post)));
};

export const fetchUpdatePost = (postId, values) => dispatch => {
  return updatePost(postId, values)
      .then( post => dispatch(editPost(post)));
};

export const fetchVotePost = (postId, voteType) => dispatch => {
  return votePost(postId, voteType)
      .then( post => dispatch(editPost(post)));
};
