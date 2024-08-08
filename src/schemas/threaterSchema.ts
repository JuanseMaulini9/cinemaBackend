import { Document, Schema, model } from "mongoose";
import { SeatsType, TheaterType } from "../types/types";

interface SeatsDocument extends Document, SeatsType {}

const seatsSchema = new Schema<SeatsDocument>({
  number: { type: Number, required: true },
  state: {
    type: String,
    enum: ["libre", "ocupado", "reservado"],
    default: "libre",
  },
});

interface TheaterDocument extends Document, TheaterType {}

const threaterSchema = new Schema<TheaterDocument>({
  movie: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  showtime: { type: Date, required: true },
  seats: [seatsSchema],
});

export default model<TheaterDocument>("threater", threaterSchema);
