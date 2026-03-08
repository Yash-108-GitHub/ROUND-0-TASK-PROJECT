const express = require("express");
const dashboardController = require("../controllers/dashboard");
const router = express.Router();
const verifyToken = require("../utils/verifyToken.js");

router.get("/dashboard",
  dashboardController.renderDashboard
);

module.exports = router;