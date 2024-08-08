import cron from "node-cron";
import { fetchMovies } from "./fetchMovies";

cron.schedule("0 0 * * 4", async () => {
  try {
    await fetchMovies();
    console.log("Películas actualizadas exitosamente.");
  } catch (error) {
    console.error("Error al actualizar las películas:", error);
  }
});
