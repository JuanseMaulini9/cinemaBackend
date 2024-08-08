import { Router } from "express";
import { getMovies, getMovie } from "../controllers/movieController";
const router = Router();

router.get("/getMovies", (req, res) => {
  getMovies(req, res);
});

router.get("/getMovie", (req, res) => {
  getMovie(req, res);
});

export default router;
