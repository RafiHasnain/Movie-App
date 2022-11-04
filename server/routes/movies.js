import express from "express";

import { createMovie, getMovies, updateMovie } from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.patch("/:id", updateMovie);

export default router;
