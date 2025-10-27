import cron from "node-cron";
import { CronExpressionParser } from 'cron-parser';
import Job from "../models/Job.js";

export function scheduleJob() {
  console.log("Triggered...")


  cron.schedule("* * * * * * ", async () => {
     const jobs = await Job.find();
     for await (const job of jobs){
      if(new Date() >= job.nextRun){
           console.log(`Job executed: ${job.name}`);
    try {
      job.lastRun = new Date()
      const interval = CronExpressionParser.parse(job.interval, { currentDate: new Date() });
      job.nextRun = interval.next().toDate();
      job.status = "completed"
      await job.save();
    }
    catch (e) {
      console.error(`Job failed: ${e.message}`)
      job.status = "failed"
      await job.save()
    }
      }
     }
  });
}

