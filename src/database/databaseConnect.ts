import mongoose from "mongoose";

export default async function databaseConnect() {
  const db_path = process.env.DB_PATH;
  try {
    if (typeof db_path === "string") {
      await mongoose.connect(`${db_path}/cinema`);
      console.log("base de datos conectada");
    } else throw Error("path is not string");
  } catch (error) {
    console.error(error);
  }
}
