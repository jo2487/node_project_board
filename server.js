const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));
app.listen(8080, function () {
  console.log("listening on 8080");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/post_registration.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/post_registration.html"));
});
