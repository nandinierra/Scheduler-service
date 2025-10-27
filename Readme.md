#  Scheduler Microservice

A production-ready Node.js microservice that automates job scheduling and execution using cron expressions.  
It follows a scalable modular architecture for maintainability and future extensibility.

---

##  Overview

This microservice enables developers to **create, view, and schedule jobs dynamically** using REST APIs.  
It leverages **Node.js**, **Express**, **MongoDB (via Mongoose)**, and **Node-Cron** for time-based execution.

The design follows clean separation of concerns across configuration, controllers, models, routes, and utilities.

---

##  Tech Stack

- **Node.js** — Runtime environment  
- **Express.js** — Backend framework  
- **MongoDB + Mongoose** — Database and schema management  
- **Node-Cron** — Job scheduling library  
- **dotenv** — Environment variable management  
- **Nodemon** — Development automation tool  

---

## API endpoints
1. GET /jobs/getAllJobs
  Description:
  Fetches all scheduled jobs from the database.

2. GET /jobs/:id
  Description:
  Fetches details of a specific job by its unique ID.

3. POST /jobs/createJob

Description:
Creates a new job with validation rules applied before scheduling.


##  Setup Guide

### 1. Clone Repository

git clone <git repo url>
cd scheduler-service
npm install
npm run dev