import { authToken } from './index.js';

const API_URL = "http://localhost:3001";

let AUTH_TOKEN =  localStorage.authToken;
if(AUTH_TOKEN){
  AUTH_TOKEN = localStorage.authToken = authToken();
}

const headers = {
  Accept: 'application/json',
  Authorization: AUTH_TOKEN,
  'Content-Type': 'application/json'
}

/*
 * Category API
 */

export const getCategories = () => {
  return fetch(`${API_URL}/categories`, { method: 'GET', headers })
          .then( response => response.json())
          .then( data => data.categories);
}

/*
 * Post API
 */

export const getAllPost = () => {
  return fetch(`${API_URL}/posts`, { method: 'GET', headers })
          .then( response => response.json())
          .then( data => data);
}

export const getPostByCategories = (category) => {
  return fetch(`${API_URL}/${category}/posts`, { method: 'GET', headers })
          .then( response => response.json())
          .then( data => data);
}

export const createNewPost = (post) => {
  return fetch(`${API_URL}/posts`, { method: 'POST', headers, body: JSON.stringify(post) })
          .then( response => response.json())
          .then( data => data);
}

export const postsDetails = (id) => {
  return fetch(`${API_URL}/posts/${id}`, { method: 'GET', headers })
          .then( response => response.json())
          .then( data => data);
}

export const deletePost = (id) => {
  return fetch(`${API_URL}/posts/${id}`, { method: 'DELETE', headers })
          .then( response => response.json())
          .then( data => data);
}

export const votePost = (id, voteType) => {
  return fetch(`${API_URL}/posts/${id}`, { method: 'POST', headers, body: JSON.stringify({option: voteType}) })
          .then( response => response.json())
          .then( data => data);
}

/*
 * Comments API
 */

export const getAllComments = (id) => {
  return fetch(`${API_URL}/posts/${id}/comments`, { method: 'GET', headers })
          .then( response => response.json())
          .then( data => data);
}
