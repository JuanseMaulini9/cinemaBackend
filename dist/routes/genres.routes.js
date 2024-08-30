"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genresController_1 = require("../controllers/genresController");
const router = (0, express_1.Router)();
router.get("/getGenres", (req, res) => {
    (0, genresController_1.getGenres)(req, res);
});
exports.default = router;
