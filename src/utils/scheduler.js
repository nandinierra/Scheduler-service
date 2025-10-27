


import cron from "node-cron";
import { CronTime } from "cron";
import Job from "../models/Job.js";



export const scheduleJob=(job)=>{
  if (!cron.validate(job.interval)) {
    console.error(`Invalid cron expression for job: ${job.name}`);
    return;
  }

  console.log(` Scheduling job: ${job.name} (${job.interval})`);

  cron.schedule(job.interval, async () => {
    console.log(` Running job: ${job.name}`);

      try {
        const lastRun = new Date();

      const cronTime = new CronTime(job.interval);
      console.log("cronTime")
      const nextRun = cronTime.sendAt();

        await Job.findByIdAndUpdate(job._id, {
          lastRun,
          nextRun,
          status: "status",
        });


      await Job.findByIdAndUpdate(job._id, { status: "completed" });
      console.log(` Job completed: ${job.name}`);
      } catch (error) {
      console.error(` Error executing job "${job.name}":`, error);
        await Job.findByIdAndUpdate(job._id, { status: "failed" });
      }
  });
}



export const initializeSchedulers = async ()=> {
  const jobs = await Job.find();
  console.log("jobs", jobs);
  jobs.forEach((job) => {
    scheduleJob(job);
  });
}