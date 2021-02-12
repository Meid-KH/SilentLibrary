const express = require("express")
const router = express.Router()
const Author = require("../models/author")

// All author
router.get("/", async (req, res) => {
  const outputValue = req.query.name
  let searchParams = {}
  try {
    if (searchParams != null && searchParams !== "") {
      searchParams = {
        name: new RegExp(req.query.name, "i"),
      }
    }
    const authors = await Author.find(searchParams)
    res.render("authors/index", { authors: authors, searchParams, outputValue })
  } catch {
    res.redirect("/")
  }
})

// New author
router.get("/new", (req, res) =>
  res.render("authors/new", { author: new Author() })
)

// Create new author
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  })
  try {
    const newAuthor = await author.save()
    // res.redirect(`newAuthor/${author.id}`)
    res.redirect(`authors`)
  } catch {
    res.render(`authors/new`, {
      author: author,
      errorMessage: "Error occured while creating an author record!",
    })
  }
})

module.exports = router
