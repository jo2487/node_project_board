const express = require("express");
const path = require("path");
const app = express();
const db = require("./database");
app.use("/public", express.static(path.join(__dirname + "/public")));

const user = [
  { id: 1, name: "유저1" },
  { id: 2, name: "유저2" },
  { id: 3, name: "유저3" },
];

app.listen(8080, function () {
  console.log("listening on 8080");
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/post_registration.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/post_registration.html"));
});
app.get("/post_update.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/post_update.html"));
});
app.get("/member_confirmation.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/member_confirmation.html"));
});

app.get("/practice", function (req, res) {
  res.sendFile(path.join(__dirname + "/practice.html"));
});

app.get("/api/list", (req, res) => {
  db.query("SELECT * FROM board_table", (err, result) => {
    res.send(result);
  });
});
