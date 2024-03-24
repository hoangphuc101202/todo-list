const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("./public"));
const homeRouter = require("./routes/homeRoutes");
app.use(express.json());
app.use("/", homeRouter);
require("./config/dbConnect");
app.listen(port, () => {
  console.log("App listen on port " + port);
});
