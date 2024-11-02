// routes/users.js

var express = require("express");
var router = express.Router();
const { Pool } = require("pg");

// Use the same pool created in app.js
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const result = await pool.query("SELECT * FROM user"); // Adjust table name if necessary
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
