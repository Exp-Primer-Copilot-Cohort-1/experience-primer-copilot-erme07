// Create web server

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const passport = require("passport");

// Create comment
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  commentController.create
);

// Delete comment
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  commentController.delete
);

// Edit comment
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  commentController.edit
);

// Get comments
router.get(
  "/get/:id",
  passport.authenticate("jwt", { session: false }),
  commentController.get
);

module.exports = router;