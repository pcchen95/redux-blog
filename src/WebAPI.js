import { getAuthToken } from "./utils";

const BASE_URL = "https://student-json-api.lidemy.me";

export const getPosts = (page) => {
  return fetch(
    `${BASE_URL}/posts?_sort=createdAt&_order=desc&_page=${
      page ? page : 1
    }&_limit=5`
  ).then((res) => res);
};

export const getSinglePost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
};

export const addPost = ({ title, body }) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};

export const updatePost = ({ id, title, body }) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};

export const deletePost = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const register = (nickname, username, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMe = () => {
  const token = getAuthToken();
  if (!token) return null;
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
