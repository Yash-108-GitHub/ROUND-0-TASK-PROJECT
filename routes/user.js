const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

const userController = require("../controllers/user.js");
const taskController = require("../controllers/task.js");

const verifyToken = require("../utils/verifyToken.js");
const isAdmin = require("../utils/isAdmin");

router.route("/api/v1/auth/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));


router.route("/api/v1/auth/login")
  .get(userController.renderLoginForm)
  .post(wrapAsync(userController.login));


router.delete("/api/v1/tasks/:id",
  verifyToken,
  isAdmin,
  taskController.deleteTask
);


module.exports = router;