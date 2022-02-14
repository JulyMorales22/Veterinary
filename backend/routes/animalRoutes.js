import express from "express";
import animalController from "../controllers/animalController.js";

const router = express.Router();

router.post("/registerAnimal", animalController.registerAnimal)
export default router;