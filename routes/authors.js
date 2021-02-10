const express = require("express")
const router = express.Router()
const Author = require("../models/author")

// All author
router.get("/", async (req, res) => {
  const author = await Author.find({})
  res.render("authors/index", author)
})

// New author
router.get("/new", (req, res) =>
  res.render("authors/new", { author: new Author() })
)

// Create new author
router.post("/", async (req, res) => {
  try {
    const newAuthor = await req.body.name
    res.redirect("/", newAuthor)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
