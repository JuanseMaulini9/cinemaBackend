import { Router } from "express";

import {
  getThreaters,
  getThreaterById,
  postThreater,
  deleteThreaterById,
  editThreater,
} from "../controllers/threaterControllers";
const router = Router();

router.get("/getThreaters", (req, res) => {
  getThreaters(req, res);
});

router.get("/getThreater", (req, res) => {
  getThreaterById(req, res);
});

router.post("/postThreater", (req, res) => {
  postThreater(req, res);
});

router.delete("/deleteThreater", (req, res) => {
  deleteThreaterById(req, res);
});

router.put("/editThreater", (req, res) => {
  editThreater(req, res);
});

export default router;
