const fs = require("fs");
const mongoose = require("mongoose");
const Task = require("../models/task");
require("dotenv").config();


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.error("DB connection error:", err));
// connectDB(process.env.MONGO_URI);

mongoose.set("bufferTimeoutMS", 20000); // Increase

// Read JSON File
const tasks = JSON.parse(fs.readFileSync(`${__dirname}/tasks.json`, "utf-8"));

// Import Data into DB
const importData = async () => {
  try {
    await Task.create(tasks);
    console.log("Data successfully loaded");
    process.exit();
  } catch (err) {
    console.error("Error importing data:", err);
  }
};

// Delete All Data from DB
const deleteData = async () => {
  try {
    await Task.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.error("Error deleting data:", err);
  }
};

// Process Command-Line Arguments
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
} else {
  console.log("Please provide a valid argument: --import or --delete");
}
