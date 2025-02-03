# Task Manager API

## Overview

The Task Manager API is a simple CRUD (Create, Read, Update, Delete) application for managing tasks. It provides endpoints to create, retrieve, update, and delete tasks using Express.js and MongoDB.

## Features

- Create new tasks
- Retrieve all tasks or a single task by ID
- Update tasks
- Delete tasks
- Uses middleware for async error handling

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JavaScript

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file and configure the following:

   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Get All Tasks

- **Endpoint:** `GET /api/v1/tasks`
- **Response:**
  ```json
  {
    "tasks": [
      {
        "_id": "taskId",
        "name": "Sample Task",
        "completed": false
      }
    ],
    "numTasks": 1
  }
  ```

### Get a Single Task

- **Endpoint:** `GET /api/v1/tasks/:id`
- **Response:**
  ```json
  {
    "task": {
      "_id": "taskId",
      "name": "Sample Task",
      "completed": false
    }
  }
  ```

### Create a Task

- **Endpoint:** `POST /api/v1/tasks`
- **Request Body:**
  ```json
  {
    "name": "New Task",
    "completed": false
  }
  ```
- **Response:**
  ```json
  {
    "task": {
      "_id": "taskId",
      "name": "New Task",
      "completed": false
    }
  }
  ```

### Update a Task

- **Endpoint:** `PATCH /api/v1/tasks/:id`
- **Request Body:**
  ```json
  {
    "name": "Updated Task",
    "completed": true
  }
  ```
- **Response:**
  ```json
  {
    "task": {
      "_id": "taskId",
      "name": "Updated Task",
      "completed": true
    }
  }
  ```

### Delete a Task

- **Endpoint:** `DELETE /api/v1/tasks/:id`
- **Response:**
  ```json
  {
    "task": null,
    "status": "success"
  }
  ```

## Error Handling

The API includes custom error handling middleware that returns a JSON response with an appropriate status code and error message.

### Example Error Response

```json
{
  "msg": "No task with id: 123456"
}
```

## License

This project is licensed under the MIT License.

## Author

Brian Kipkirui Cheruiyot
