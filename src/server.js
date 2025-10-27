

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import jobRoutes from "./api/routes/jobRoutes.js";
import { initializeSchedulers } from "./utils/scheduler.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/jobs", jobRoutes);
app.get("/", (req, res) => res.send("Scheduler service is up"));

const port = process.env.PORT || 3400;

const main = async () => {
  await connectDB(process.env.MONGO_URI);
  await initializeSchedulers();
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

main();

