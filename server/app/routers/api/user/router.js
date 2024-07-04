const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/userActions");

const hashPassword = require("../../../middlewares/hashPassword");
const validateUser = require("../../../middlewares/validation/validateUser");

router.get("/", browse);

router.get("/:id", read);

router.put("/:id", hashPassword, edit);

router.post("/register", validateUser, hashPassword, add);

router.delete("/:id", destroy);

module.exports = router;
