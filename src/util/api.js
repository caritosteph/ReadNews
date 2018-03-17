const API_URL = "http://localhost:3001";
const AUTH_TOKEN =  Math.random().toString(36).substr(-8);
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