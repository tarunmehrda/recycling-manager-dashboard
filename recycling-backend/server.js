const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Corona@01572",
  database: "recycling_ai"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

app.get("/top10", (req, res) => {
  const sql = `
    SELECT c.name, r.total_score, r.rank_position
    FROM rankings r
    JOIN candidates c ON c.id = r.candidate_id
    ORDER BY r.rank_position ASC
    LIMIT 10
  `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.get("/candidates", (req, res) => {
    const sql = `
      SELECT 
        c.id,
        c.name,
        c.experience,
        IFNULL(e.crisis_score, 0) AS crisis_score,
        IFNULL(e.sustainability_score, 0) AS sustainability_score,
        IFNULL(e.motivation_score, 0) AS motivation_score
      FROM candidates c
      LEFT JOIN evaluations e ON c.id = e.candidate_id
    `;
  
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
