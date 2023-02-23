const express = require("express");
const { get } = require("mongoose");

const {
  createCrop,
  getAdminCrops,
  getAllCrops,
  getCropDetails,
} = require("../controllers/cropController");
// const { getAdminProducts } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();
router.route("/crops").get(getAllCrops);
router
  .route("/admin/crops")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminCrops);
router
  .route("/admin/crop/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCrop);

router.route("/crop/:id").get(getCropDetails);
module.exports = router;
