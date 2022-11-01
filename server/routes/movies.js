import express from "express";

import { createMovie, getMovies } from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovie); //

export default router;
