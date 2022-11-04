import express from "express";

import {
  createMovie,
  deleteMovie,
  getMovies,
  updateMovie,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.patch("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
