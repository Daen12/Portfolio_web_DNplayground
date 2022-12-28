"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//위에서 views폴더로 경로 설정하였기 때문에 그 이하 경로를 명시한다.
router.get("/", ctrl.output.home);
router.get("/signin", ctrl.output.signin);
router.post("/signin", ctrl.process.signin);

module.exports = router;
