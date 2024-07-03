const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const userRouter = require("./user/router");
const categoryRouter = require("./category/router");

router.use("/user", userRouter);
router.use("/categories", categoryRouter);

/* ************************************************************************* */

module.exports = router;
