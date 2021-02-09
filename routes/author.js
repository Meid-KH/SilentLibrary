const express = require("express")
const router = express.Router()

// All author
router.get("/", (req, res) => res.render("authors/index"))
// New author
router.get("/new", (req, res) => res.render("authors/new"))

// Create new author
router.post("Create", (req, res) => res.render("authors/new"))

module.exports = router
