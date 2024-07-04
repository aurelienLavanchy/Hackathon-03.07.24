const express = require("express");

const router = express.Router();

const { login, logout } = require("../../../controllers/authActions");
const validateAuth = require("../../../middlewares/validation/authValidation");

router.post("/login", validateAuth, login);
router.get("/logout", logout);

module.exports = router;
