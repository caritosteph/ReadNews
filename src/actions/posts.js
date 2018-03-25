import { ALL_POST , SORT_POST} from './constantTypes';
import { getAllPost, getPostByCategories } from '../util/api';

const allPosts = (posts) =>  ({
  type: ALL_POST,
  posts
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
