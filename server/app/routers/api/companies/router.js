const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import entreprise-related actions
const { browse, read, add } = require("../../../controllers/companyActions");

// Route to get a list of entreprises
router.get("/", browse);

// Route to get a specific entreprises by ID
router.get("/:id", read);

// Route to add a new entreprises
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
