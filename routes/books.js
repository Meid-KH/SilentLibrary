const express = require("express")
const router = express.Router()
const Author = require("../models/book")

// All author
router.get("/", async (req, res) => {
  res.render("books/index")
})

// New author
router.get("/new", (req, res) => res.render("books/new"))

// Create new author
router.post("/", async (req, res) => {})

module.exports = router
