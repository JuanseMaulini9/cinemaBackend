import { Request, Response } from "express";

export async function getGenres(req: Request, res: Response) {
  const api_key = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=es",
      options
    );
    const data = await response.json();
    res.status(200).send(data.genres);
  } catch (error) {
    console.log(error);
  }
}
