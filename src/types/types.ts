import { Types } from "mongoose";

export type AsientoType = {
  numero: number;
  estado: "libre" | "ocupado" | "reservado";
};

export type SalaType = {
  pelicula: Types.ObjectId;
  horario: Date;
  asientos: AsientoType[];
};

export type Pelicula = {
  idtmdb: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
