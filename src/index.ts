import express, { json } from "express";
import dotenv from "dotenv";
import "../src/utils/cron";

import databaseConnect from "./database/databaseConnect";

import movieRoutes from "./routes/movie.routes";
import threaterRoutes from "./routes/threater.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(json());

app.use("/movies", movieRoutes);
app.use("/threater", threaterRoutes);

app.listen(PORT, () => {
  console.log(`Server Escuchando en puerto: ${PORT}`);
  databaseConnect();
});
