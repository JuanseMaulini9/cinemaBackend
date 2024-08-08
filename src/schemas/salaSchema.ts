import { Document, Schema, model } from "mongoose";
import { AsientoType, SalaType } from "../types/types";

interface AsientoDocument extends Document, AsientoType {}

const asientoSchema = new Schema<AsientoDocument>({
  numero: { type: Number, required: true },
  estado: {
    type: String,
    enum: ["libre", "ocupado", "reservado"],
    default: "libre",
  },
});

interface SalaDocument extends Document, SalaType {}

const salaSchema = new Schema<SalaDocument>({
  pelicula: {
    type: Schema.Types.ObjectId,
    ref: "Pelicula",
    required: true,
  },
  horario: { type: Date, required: true },
  asientos: [asientoSchema],
});

module.exports = model<SalaDocument>("Sala", salaSchema);
