"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMovies = fetchMovies;
const movieSchema_1 = __importDefault(require("../schemas/movieSchema"));
function fetchMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = process.env.TMDB_URL;
        const api_key = process.env.API_KEY;
        if (typeof url !== "string") {
            throw new Error("url is not string");
        }
        if (typeof api_key !== "string") {
            throw new Error("api_key is not string");
        }
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${api_key}`,
            },
        };
        try {
            const response = yield fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error fetching movies: ${response.statusText}`);
            }
            const data = yield response.json();
            if (!data.results || !Array.isArray(data.results)) {
                throw new Error("El Resultado no es un array");
            }
            const allMovies = data.results.map((movie) => ({
                idtmdb: movie.id,
                adult: movie.adult,
                backdrop_path: movie.backdrop_path,
                genre_ids: movie.genre_ids,
                overview: movie.overview,
                poster_path: movie.poster_path,
                release_date: movie.release_date,
                title: movie.title,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count,
            }));
            if (allMovies) {
                yield movieSchema_1.default.deleteMany();
                yield movieSchema_1.default.insertMany(allMovies);
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
