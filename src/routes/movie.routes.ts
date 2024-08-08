import { Router } from "express";
import { getMovies } from "../controllers/movieController";
const router = Router();

router.get("/getMovies", (req, res) => {
  getMovies();
  res.send("Peliculas cargadas");
});

export default router;
