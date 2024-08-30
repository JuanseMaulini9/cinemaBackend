"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const seatsSchema = new mongoose_1.Schema({
    number: { type: Number, required: true },
    state: {
        type: String,
        enum: ["libre", "ocupado", "reservado"],
        default: "libre",
    },
});
const threaterSchema = new mongoose_1.Schema({
    movie: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    showtime: { type: Date, required: true },
    seats: [seatsSchema],
});
exports.default = (0, mongoose_1.model)("threater", threaterSchema);
