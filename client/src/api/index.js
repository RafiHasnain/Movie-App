import axios from "axios";

const url = process.env.REACT_APP_API_KEY;

export const fetchPosts = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(url, newMovie);
export const updateMovie = (id, updatedMovie) =>
  axios.patch(`${url}/${id}`, updatedMovie);
export const deleteMovie = (id) => axios.delete(`${url}/${id}`);
