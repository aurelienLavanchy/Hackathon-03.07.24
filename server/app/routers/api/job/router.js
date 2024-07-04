const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/jobActions");

const validateJobSchema = require("../../../middlewares/validation/validateJobSchema");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit);
router.post("/", validateJobSchema, add);
router.delete("/:id", destroy);

module.exports = router;
