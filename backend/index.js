require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("./controllers/task.controller");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT;
const taskModel = require("./models/task.model");
console.log(taskModel);

const MONGODB_URI = process.env.MONGODB_URI;

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
