const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/messages", (req, res) => {
  readMessages(function (rows) {
    res.end(JSON.stringify(rows));
  });
});

router.post("/addMessage", (req, res) => {
  createMessages(req.body.user, req.body.msg, function () {
    res.redirect("/messages");
    res.end();
  });
});

function createMessages(user, msg, cb) {
  db.run(
    `INSERT INTO messages (username, message) VALUES (?,?)`,
    [user, msg],
    (err, result) => {
      if (err) throw err;
      cb(result);
    }
  );
}

function readMessages(cb) {
  db.all(`SELECT * FROM messages`, (err, rows) => {
    if (err) throw err;
    cb(rows);
  });
}

module.exports = router;
