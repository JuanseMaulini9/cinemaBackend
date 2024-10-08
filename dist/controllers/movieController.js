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
exports.getMovies = getMovies;
exports.getMovie = getMovie;
const movieSchema_1 = __importDefault(require("../schemas/movieSchema"));
function getMovies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allMovies = yield movieSchema_1.default.find();
            res.status(200).json(allMovies);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { movieId } = req.params;
        try {
            const movie = yield movieSchema_1.default.findById(movieId);
            res.status(200).json(movie);
        }
        catch (error) {
            console.log(error);
        }
    });
}
