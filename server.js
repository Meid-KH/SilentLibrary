if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const port = process.env.PORT || 3001
const databaseUrl = process.env.DATABASE_URL
// const port = 3001

const IndexRouter = require("./routes/index.js")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

app.use(IndexRouter)

// app.get("/", (req, res) => res.send("Hello World!"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

mongoose.connect(process.env.DATABASE_URL)

const DB = mongoose.connection
DB.on("error", (error) => console.error(error))
DB.once("open", () => console.log("Connected to mongoose with success !"))
