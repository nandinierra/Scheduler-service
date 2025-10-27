// // src/api/services/jobService.js
// import Job from "../../models/Job.js";
// import { scheduleJob } from "../../utils/scheduler.js";

// export async function createJob(payload) {
//   const job = new Job(payload);
//   await job.save();

//   // Schedule it right away
//   scheduleJob(job);

//   return job;
// }

// export async function getAllJobs() {
//   return Job.find().sort({ createdAt: -1 }).lean();
// }

// export async function getJobById(id) {
//   return Job.findById(id).lean();
// }
