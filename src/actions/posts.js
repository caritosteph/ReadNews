import { ALL_POST } from './constantTypes';
import { getAllPost, getPostByCategories } from '../util/api';

const allPosts = (posts) =>  ({
  type: ALL_POST,
  posts
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
