const express = require("express");

const {
  createKnowledge,
  getAllKnowledges,
} = require("../controllers/knowledgeController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();
router.route("/knowledges").get(getAllKnowledges);

router
  .route("/admin/knowledge/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createKnowledge);

module.exports = router;
