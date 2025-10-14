require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const taskModel = require("./models/task.model");

const MONGODB_URI = "mongodb://localhost:27017/task-manager";

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("./controllers/task.controller");

console.log(getTasks, createTask, updateTask, deleteTask);
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
