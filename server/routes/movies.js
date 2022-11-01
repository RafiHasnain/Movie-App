import express from "express";

import { createMovie, getMovies } from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies); // This is get request
router.post("/", createMovie); // The is get request

export default router;
