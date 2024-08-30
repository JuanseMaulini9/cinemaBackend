"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = require("../controllers/movieController");
const router = (0, express_1.Router)();
router.get("/getMovies", (req, res) => {
    (0, movieController_1.getMovies)(req, res);
});
router.get("/getMovie/:movieId", (req, res) => {
    (0, movieController_1.getMovie)(req, res);
});
exports.default = router;
