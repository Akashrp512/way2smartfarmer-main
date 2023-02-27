const express = require("express");

const {
  createCompare,
  getAllCompares,
  getCompareDetails,
} = require("../controllers/compareController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();
router.route("/compares").get(getAllCompares);

router
  .route("/admin/compare/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCompare);
router.route("/compare/:id").get(getCompareDetails);
module.exports = router;
