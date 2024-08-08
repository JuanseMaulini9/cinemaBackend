import { Document, Schema, model } from "mongoose";
import { MovieType } from "../types/types";

interface MovieDocument extends Document, MovieType {}

const movieSchema = new Schema<MovieDocument>({
  idtmdb: {
    required: true,
    type: Number,
  },
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  overview: String,
  poster_path: String,
  release_date: String,
  title: String,
  vote_average: Number,
  vote_count: Number,
});

export default model<MovieDocument>("Movie", movieSchema);
