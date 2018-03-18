import { ALL_POST } from './constantTypes';
import { getAllPost } from '../util/api';

const allPosts = (posts) =>  ({
  type: ALL_POST,
  posts
});


export const fetchAllPost = () => dispatch => (
  getAllPost()
    .then( posts => dispatch(allPosts(posts)))
)
