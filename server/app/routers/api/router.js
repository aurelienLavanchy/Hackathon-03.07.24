const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const userRouter = require("./user/router");
const categoryRouter = require("./category/router");
const companiesRouter = require("./companies/router");
const jobRouter = require("./job/router");
const authRouter = require("./auth/router");

router.use("/user", userRouter);
router.use("/categories", categoryRouter);
router.use("/companies", companiesRouter);
router.use("/job", jobRouter);
router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
