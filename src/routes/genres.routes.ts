import { Router } from "express";
import { getGenres } from "../controllers/genresController";

const router = Router();

router.get("/getGenres", (req, res) => {
  getGenres(req, res);
});

export default router;
