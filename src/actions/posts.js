import { ALL_POST , SORT_POST, ADD_POST, POST_DETAIL } from './constantTypes';
import { getAllPost, getPostByCategories, createNewPost, postsDetails } from '../utils/api';

const allPosts = (posts) =>  ({
  type: ALL_POST,
  posts
});

const addPost = (post) => ({
  type: ADD_POST,
  post
});

const postDetail = (id) => ({
  type: POST_DETAIL,
  id
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
      .then( post => dispatch(addPost(post)));
};

export const fetchPostDetail = (id) => dispatch => {
  return postsDetails(id)
      .then( post => dispatch(postDetail(post)));
};
