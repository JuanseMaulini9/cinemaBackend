"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const threaterControllers_1 = require("../controllers/threaterControllers");
const router = (0, express_1.Router)();
router.get("/getThreaters", (req, res) => {
    (0, threaterControllers_1.getThreaters)(req, res);
});
router.get("/getThreater", (req, res) => {
    (0, threaterControllers_1.getThreaterById)(req, res);
});
router.post("/postThreater", (req, res) => {
    (0, threaterControllers_1.postThreater)(req, res);
});
router.delete("/deleteThreater", (req, res) => {
    (0, threaterControllers_1.deleteThreaterById)(req, res);
});
router.put("/editThreater", (req, res) => {
    (0, threaterControllers_1.editThreater)(req, res);
});
exports.default = router;
