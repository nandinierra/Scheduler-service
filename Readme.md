#  Scheduler Microservice

##  Overview
The **Scheduler Microservice** is a modular backend service built using **Node.js, Express, and MongoDB**.  
It provides APIs for **creating, listing, and retrieving scheduled jobs**, storing all related job metadata in the database.

>  Note: This project simulates job scheduling — no real scheduling logic (like cron execution) is implemented, as per the assignment instructions.

---

##  Features
- **Job Scheduling API:** Allows flexible creation of dummy jobs with scheduling attributes.
- **RESTful Endpoints:**
  - `GET /jobs` — List all jobs.
  - `GET /jobs/:id` — Fetch a job by its ID.
  - `POST /jobs` — Create a new job.
- **Database Integration:** Stores fields such as job name, description, interval, last run, next run, and status.
- **Validation Middleware:** Ensures data integrity using `express-validator`.
- **Error Handling Middleware:** Handles unexpected runtime errors gracefully.
- **Modular Architecture:** Follows best coding practices and SOLID principles.

---

