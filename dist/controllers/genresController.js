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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenres = getGenres;
function getGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const api_key = process.env.API_KEY;
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${api_key}`,
            },
        };
        try {
            const response = yield fetch("https://api.themoviedb.org/3/genre/movie/list?language=es", options);
            const data = yield response.json();
            res.status(200).send(data.genres);
        }
        catch (error) {
            console.log(error);
        }
    });
}
