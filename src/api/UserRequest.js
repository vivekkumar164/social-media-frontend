import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000"});

export const getUser =(userId) => API.get(`/users/${userId}`);

export const updateUser = (id,formData) => API.put(`/users/${id}`,formData);

export const getAllUser = () => API.get('/users');

export const followUser = (id,data) => API.put(`/users/${id}/follow`,data);

export const unFollowUser = (id,data) => API.put(`/users/${id}/unfollow`,data);