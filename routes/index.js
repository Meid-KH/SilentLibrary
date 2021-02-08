const express = require("express")
const router = express.Router()

router.get("/", (req, res) => res.render("index"))
// router.get("/", (req, res) => res.send("Hellooo w there "))

module.exports = router
