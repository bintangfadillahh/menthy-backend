const express = require("express");
const router = express.Router();

const articleRouter = require("./article.router");
const userRouter = require("./user.router");

router.use("/article", articleRouter);
router.use("/user", userRouter);

module.exports = router;
