"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    idtmdb: {
        required: true,
        type: Number,
    },
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    overview: String,
    poster_path: String,
    release_date: String,
    title: String,
    vote_average: Number,
    vote_count: Number,
});
exports.default = (0, mongoose_1.model)("Movie", movieSchema);
