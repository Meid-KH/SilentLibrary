if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const port = process.env.PORT || 3001
const databaseUrl = process.env.DATABASE_URL
// Define routes
const IndexRouter = require("./routes/index.js")
const AuthorRouter = require("./routes/author.js")

// Config
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
// Use routes
app.use("/", IndexRouter)
app.use("/author", AuthorRouter)
// Server init
app.listen(port, () =>
  console.log(`The Silent library app is listening on port ${port}!`)
)
// MongoDb connection
mongoose.connect(databaseUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
const DB = mongoose.connection
DB.on("error", (error) => console.error(error))
DB.once("open", () => console.log("Connected to mongoose with success !"))
