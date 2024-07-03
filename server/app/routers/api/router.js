const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const entreprisesRouter = require("./companies/router");

router.use("/entreprises", entreprisesRouter);

/* ************************************************************************* */

module.exports = router;
