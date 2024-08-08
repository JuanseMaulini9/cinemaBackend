import { Types } from "mongoose";

export type SeatsType = {
  number: number;
  state: "libre" | "ocupado" | "reservado";
};

export type ThreaterType = {
  movie: Types.ObjectId;
  showtime: Date;
  seats: SeatsType[];
};

export type MovieType = {
  idtmdb: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};
