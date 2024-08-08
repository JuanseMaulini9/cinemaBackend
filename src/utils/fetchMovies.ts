import movieSchema from "../schemas/movieSchema";
import { MovieType } from "../types/types";

export async function fetchMovies() {
  const url = process.env.TMDB_URL;
  const api_key = process.env.API_KEY;

  if (typeof url !== "string") {
    throw new Error("url is not string");
  }
  if (typeof api_key !== "string") {
    throw new Error("api_key is not string");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.results || !Array.isArray(data.results)) {
      throw new Error("El Resultado no es un array");
    }

    const allMovies: MovieType[] = data.results.map((movie: any) => ({
      idtmdb: movie.id,
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: movie.genre_ids,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
    }));
    if (allMovies) {
      await movieSchema.deleteMany();
      await movieSchema.insertMany(allMovies);
    }
  } catch (error) {
    console.log(error);
  }
}
