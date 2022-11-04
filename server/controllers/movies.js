import mongoose from "mongoose";
import movieDetail from "../models/movieDetail.js";

export const getMovies = async (req, res) => {
  try {
    const movieDetails = await movieDetail.find();

    res.status(200).json(movieDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMovie = async (req, res) => {
  const body = req.body;

  const newMovie = new movieDetail(body);
  try {
    await newMovie.save();

    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { id: _id } = req.params;
  const movie = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedMovie = await movieDetail.findByIdAndUpdate(
    _id,
    { ...movie, _id },
    {
      new: true,
    }
  );

  res.json(updatedMovie);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await movieDetail.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};
