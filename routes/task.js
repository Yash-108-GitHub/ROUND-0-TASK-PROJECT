const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const taskController = require("../controllers/task");
const verifyToken = require("../utils/verifyToken");
const isAdmin = require("../utils/isAdmin");

router.post("/api/v1/tasks",
    verifyToken,
    wrapAsync(taskController.createTask)
);

router.get("/api/v1/tasks",
    verifyToken,
    wrapAsync(taskController.getAllTasks)
);

router.delete("/api/v1/task/:id",
    verifyToken,
    isAdmin,
    wrapAsync(taskController.deleteTask)
);

module.exports = router;