import express from "express";
import dotenv from "dotenv";

import databaseConnect from "./database/databaseConnect";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Escuchando en puerto: ${PORT}`);
  databaseConnect();
});
