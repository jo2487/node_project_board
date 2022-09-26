const express = require("express");
const path = require("path");
const app = express();
const db = require("./database");
app.use("/public", express.static(path.join(__dirname + "/public")));

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

// index별로 Params통해서 DB row 분리
app.get("/api/list/:index", (req, res) => {
  var params = req.params;
  console.log(params);
  db.query(
    "SELECT * FROM board_table where registration_order=" + params.index,
    (err, result) => {
      res.send(result);
    }
  );
});
