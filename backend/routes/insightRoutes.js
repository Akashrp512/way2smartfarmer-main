const express = require("express");

const {
  createInsight,
  getAllInsights,
  getInsightDetails,
} = require("../controllers/insightController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();
router.route("/insights").get(getAllInsights);

router
  .route("/admin/insight/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createInsight);
router.route("/insight/:id").get(getInsightDetails);
module.exports = router;
