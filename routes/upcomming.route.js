const express = require("express");
const { upcommingEmail } = require("../controllers/upcomming.controller");
const router = express.Router();

router.post("/create", upcommingEmail);

module.exports = router;
