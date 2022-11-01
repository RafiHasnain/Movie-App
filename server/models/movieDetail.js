import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  rating: Number,
  tags: [String],
  description: String,
  poster: String,
});

const movieDetail = mongoose.model("movieDetail", movieSchema);

export default movieDetail;
