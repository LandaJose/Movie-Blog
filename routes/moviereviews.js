const express = require("express");
const router = express.Router();
const Review = require("../models/reviews");
//All Reviews Route
router.get("/", (req, res) => {
  res.render("moviereviews/index");
});

//New Review Route
router.get("/new", (req, res) => {
  res.render("moviereviews/new", { review: new Review() });
});

//Create Moview Review Route
router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
