const sqlite = require("sqlite3");

const db = new sqlite.Database(
  "./data/database.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) {
      throw err;
    }
  }
);
db.close;
module.exports = db;
