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
