import { MovieType } from "../types/types";
import { Request, Response } from "express";
import movieSchema from "../schemas/movieSchema";

export async function getMovies(req: Request, res: Response) {
  try {
    const allMovies = await movieSchema.find();
    res.status(200).json(allMovies);
  } catch (error) {
    console.log(error);
  }
}

export async function getMovie(req: Request, res: Response) {
  const { movieId } = req.params;
  try {
    const movie = await movieSchema.findById(movieId);
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
}
