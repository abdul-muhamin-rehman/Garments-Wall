import { post, get, put, remove } from "../http-requests/index";

export const getUserById = (url, id) => {
  return get(url, id);
};

export const postUserData = (url, body, headers) => {
  return post(url, body, headers);
};

export const updateUserData = (url, body) => {
  return put(url, body);
};

export const deleteUserData = (url) => {
  return remove(url);
};
