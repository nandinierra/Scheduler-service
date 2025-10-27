

import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  interval: { type: String, required: true },
  lastRun: { type: Date, default: null },
  nextRun: { type: Date, default: null },
  status: { type: String, enum: ["scheduled","running","failed","completed"], default: "scheduled" },
 
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model("Job", jobSchema);
