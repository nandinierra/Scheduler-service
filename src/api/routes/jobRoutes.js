


import express from "express";
import {listJobs, getJob, createJob} from "../controllers/jobController.js";
import { createJobRules, validate } from "../validators/jobValidator.js";

const router = express.Router();

router.get("/getAllJobs", listJobs);
router.get("/:id", getJob);
router.post("/createJob", createJobRules, validate, createJob);

export default router;



