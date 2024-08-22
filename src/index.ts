import express, { json } from "express";
import dotenv from "dotenv";
import "../src/utils/cron";

import databaseConnect from "./database/databaseConnect";

import movieRoutes from "./routes/movie.routes";
import threaterRoutes from "./routes/threater.routes";
import genresRoutes from "./routes/genres.routes";

import cors from "cors";
import resetMovies from "./utils/resetMovies";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(json());
app.use(cors());

app.use("/movies", movieRoutes);
app.use("/threater", threaterRoutes);
app.use("/genres", genresRoutes);

app.listen(PORT, async () => {
  console.log(`Server Escuchando en puerto: ${PORT}`);
  try {
    await databaseConnect();
    resetMovies();
  } catch (error) {
    console.log(error);
  }
});
