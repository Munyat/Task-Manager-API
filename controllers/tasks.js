const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks, numTasks: tasks.length });
});

const createTasks = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(createCustomError(`No task with id: ${req.params.id}`, 404));
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    returnDocument: "after",
  });

  if (!task) {
    return next(createCustomError(`No task with id: ${req.params.id}`, 404));
  }

  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return next(createCustomError(`No task with id: ${req.params.id}`, 404));
  }

  res.status(201).json({ task: null, status: "success" });
});

module.exports = { getAllTasks, createTasks, getTask, updateTask, deleteTask };
