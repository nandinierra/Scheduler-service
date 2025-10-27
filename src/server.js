import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import jobRoutes from "./api/routes/jobRoutes.js";
import { scheduleJob } from "./utils/scheduler.js";

dotenv.config();
const app = express();
scheduleJob()
app.use(cors());
app.use(express.json());

app.use("/jobs", jobRoutes);
app.get("/", (req, res) => res.send("Scheduler service is up"));

const port = process.env.PORT || 3400;

const main = async () => {
  await connectDB(process.env.MONGO_URI);
  
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

main();

