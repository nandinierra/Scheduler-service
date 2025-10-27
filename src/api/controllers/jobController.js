
import Job from "../../models/Job.js";
import { scheduleJob } from "../../utils/scheduler.js";


export async function createJob(req, res, next) {
  try {
    const { name, description, interval } = req.body;
    const job = await Job.create({ name, description, interval});
     scheduleJob(job);
    return res.status(201).json({ message: "Job created", job });
  } catch (err) {
    next(err);
  }
}

export async function listJobs(req, res, next) {
  console.log("got job")
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }).lean();
    return res.json(jobs);
  } catch (err) {
    next(err);
  }
}


export async function getJob(req, res, next) {
  try {
    const id=req.params.id;
    const job = await Job.findById(id).lean();
    if (!job) return res.status(404).json({ message: "Job not found" });
    return res.json(job);
  } catch (err) {
    next(err);
  }
}
