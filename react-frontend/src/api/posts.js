import axios from "axios";

const API_BASE = "http://localhost:8080/posts";

export const getAllPosts = () => axios.get(API_BASE).then((res) => res.data);

export const getPost = (id) =>
  axios.get(`${API_BASE}/${id}`).then((res) => res.data);

export const createPost = (post) =>
  axios.post(API_BASE, post).then((res) => res.data);

export const updatePost = (id, content) =>
  axios.patch(`${API_BASE}/${id}`, { content }).then((res) => res.data);

export const deletePost = (id) => axios.delete(`${API_BASE}/${id}`);
