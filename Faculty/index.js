const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./router/Faculty_signUp");
const path = require("path");
app.use(express.static("public")); //for css & image & Js
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
//Connection
mongoose.connect("mongodb://localhost:27017/adminPannel").then((res) => {
  console.log("Mongodb connected");
});

//view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
