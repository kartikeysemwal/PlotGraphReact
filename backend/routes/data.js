const express = require("express");

const { createData } = require("../controllers/data");

const router = express.Router();

router.get("/", createData);

module.exports = router;
